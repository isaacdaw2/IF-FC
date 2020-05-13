<?php

namespace App\Controller;

use App\Entity\Jugadores;
use App\Entity\Usuarios;
use App\Form\JugadoresType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

class JugadoresController extends AbstractController
{
    /**
     * @Route("/jugadores", name="jugadores")
     */
    public function index(Request $request)
    {
        $jugador = new Jugadores();
        $form = $this->createForm(JugadoresType::class, $jugador);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()){
            $usuario = $this->getUser();
            $jugador->setUsuarios($usuario);
            $em = $this->getDoctrine()->getManager();
            $em->persist($jugador);
            $em->flush();
            return $this->redirectToRoute('home');
        }

        return $this->render('jugadores/index.html.twig', [
            'formularioJugadores' => $form->createView()
        ]);
    }
}
