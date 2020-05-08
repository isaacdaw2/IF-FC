<?php

namespace App\Controller;

use App\Entity\Socios;
use App\Form\SociosType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class SociosController extends AbstractController
{
    /**
     * @Route("/socios", name="socios")
     */
    public function index(Request $request)
    {
        $socio = new Socios();
        $form = $this->createForm(SociosType::class, $socio);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){
            $usuario = $this->getUser();
            $socio->setUsuarios($usuario);
            $em = $this->getDoctrine()->getManager();
            $em->persist($socio);
            $em->flush();
            return $this->redirectToRoute('home');
        }

        return $this->render('socios/index.html.twig', [
            'formularioSocios' => $form->createView()
        ]);
    }
}
