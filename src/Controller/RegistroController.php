<?php

namespace App\Controller;

use App\Entity\Usuarios;
use App\Form\UsuariosType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

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
}
