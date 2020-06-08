<?php

namespace App\Controller;

use App\Entity\Entrenadores;
use App\Form\EntrenadoresType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\String\Slugger\SluggerInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class EntrenadoresController extends AbstractController
{
    /**
     * @Route("/envio-titulo", name="envio-titulo")
     */
    public function envioTitulo(Request $request, SluggerInterface $slugger)
    {
        if($request->isXmlHttpRequest()){
            $entrenador = new Entrenadores();

            //$titulos = $request->request->get('titulo');
            $titulos = $request->files->get('file');
            
            if ($titulos) {
                $originalFilename = pathinfo($titulos->getClientOriginalName(), PATHINFO_FILENAME);
                // this is needed to safely include the file name as part of the URL
                $safeFilename = $slugger->slug($originalFilename);
                $newFilename = $safeFilename.'-'.uniqid().'.'.$titulos->guessExtension();

                // Move the file to the directory where brochures are stored
                try {
                    $titulos->move(
                        $this->getParameter('titulosEntrenador_directory'),
                        $newFilename
                    );
                } catch (FileException $e) {
                    throw new \Exception('Ha ocurrido un error');
                }

                // updates the 'brochureFilename' property to store the PDF file name
                // instead of its contents
                $entrenador->setTitulacion($newFilename);
            }

            $usuario = $this->getUser();
            $entrenador->setUsuarios($usuario);
            $em = $this->getDoctrine()->getManager();
            $em->persist($entrenador);
            $em->flush();           

            return new JsonResponse('Titulo enviado');

        } else {
            throw new \Exception("No autorizado");
        }
    }

    /**
     * @Route("/datos-entrenadores", options={"expose"=true}, name="datos-entrenadores", methods={"GET"})
     */
    public function datosEntrenador(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $usuario = $this->getUser();
        $entrenador = $em->getRepository(Entrenadores::class)->findOneBy(['usuarios' => $usuario]);

        if($entrenador) {
            $data = [
                'id'=> $entrenador->getId(),
                'titulo' => $entrenador->getTitulacion()
            ];
        
            return new JsonResponse($data, Response::HTTP_OK);            
        } else {
            return new JsonResponse('Este usuario no es un entrenador');
        }        
    }

        // /**
    //  * @Route("/entrenadores", name="entrenadores")
    //  */
    // public function index(Request $request, SluggerInterface $slugger)
    // {
    //     $entrenador = new Entrenadores();
    //     $form = $this->createForm(EntrenadoresType::class, $entrenador);
    //     $form->handleRequest($request);

    //     if($form->isSubmitted() && $form->isValid()){
    //         $brochureFile = $form->get('titulacion')->getData();
    //         if ($brochureFile) {
    //             $originalFilename = pathinfo($brochureFile->getClientOriginalName(), PATHINFO_FILENAME);
    //             // this is needed to safely include the file name as part of the URL
    //             $safeFilename = $slugger->slug($originalFilename);
    //             $newFilename = $safeFilename.'-'.uniqid().'.'.$brochureFile->guessExtension();

    //             // Move the file to the directory where brochures are stored
    //             try {
    //                 $brochureFile->move(
    //                     $this->getParameter('titulosEntrenador_directory'),
    //                     $newFilename
    //                 );
    //             } catch (FileException $e) {
    //                 throw new \Exception('Ha ocurrido un error');
    //             }

    //             // updates the 'brochureFilename' property to store the PDF file name
    //             // instead of its contents
    //             $entrenador->setTitulacion($newFilename);
    //         }
    //         $usuario = $this->getUser();
    //         $entrenador->setUsuarios($usuario);
    //         $em = $this->getDoctrine()->getManager();
    //         $em->persist($entrenador);
    //         $em->flush();
    //         return $this->redirectToRoute('home');
    //     }

    //     return $this->render('entrenadores/index.html.twig', [
    //         'formularioEntrenadores' => $form->createView()
    //     ]);
    // }
}
