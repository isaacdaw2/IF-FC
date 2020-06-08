<?php

namespace App\Controller;

use App\Entity\Usuarios;
use App\Form\UsuariosType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;

class RegistroController extends AbstractController
{
    /**
     * @Route("/registro", name="registro")
     */
    public function index(Request $request, UserPasswordEncoderInterface $passwordEncoder)
    {
        $usuario = new Usuarios();
        $form = $this->createForm(UsuariosType::class, $usuario);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){
            $em = $this->getDoctrine()->getManager();
            $usuario->setPassword($passwordEncoder->encodePassword($usuario, $form['password']->getData()));
            $em->persist($usuario);
            $em->flush();
            $this->addFlash('registrado', Usuarios::REGISTRO_EXITOSO);
            return $this->redirectToRoute('registro');
        }

        return $this->render('registro/index.html.twig', [
            'formulario' => $form->createView()
        ]);
    }

    /**
     * @Route("/comprobar-email", name="comprobar-email")
     */
    public function comprobarEmail(Request $request)
    {
        if($request->isXmlHttpRequest()){
            $em = $this->getDoctrine()->getManager();
            $email = $request->request->get('email');
            $existe = $em->getRepository(Usuarios::class)->findOneBy(['email'=> $email]);

            if ($existe) {
                return new JsonResponse(true, Response::HTTP_OK);
            } else {
                return new JsonResponse(false, Response::HTTP_OK);
            }
        } else {
            throw new \Exception("No autorizado");
        }
    }

    /**
     * @Route("/comprobar-dni", name="comprobar-dni")
     */
    public function comprobarDni(Request $request)
    {
        if($request->isXmlHttpRequest()){
            $em = $this->getDoctrine()->getManager();
            $dni = $request->request->get('dni');
            $exist = $em->getRepository(Usuarios::class)->findOneBy(['dni'=> $dni]);

            if ($exist) {
                return new JsonResponse(true, Response::HTTP_OK);
            } else {
                return new JsonResponse(false, Response::HTTP_OK);
            }
        } else {
            throw new \Exception("No autorizado");
        }
    }
}
