<?php

namespace App\Controller;

use App\Entity\Jugadores;
use App\Entity\Usuarios;
use App\Form\JugadoresType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

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

     /**
     * @Route("/jugadores/{id}", name="verJugador")
     */
    public function verJugador($id){
        $em = $this->getDoctrine()->getManager();
        $jugador = $em->getRepository(Jugadores::class)->find($id);
        return $this->render('jugadores/verJugador.html.twig', [
            'jugador' => $jugador
        ]);
    }

    /**
     * @Route("/misdatos", name="misDatos")
     */
    public function misDatos(){
        $em = $this->getDoctrine()->getManager();
        $usuario = $this->getUser();
        $misdatos = $em->getRepository(Jugadores::class)->findBy(['usuarios'=>$usuario]);
        return $this->render('jugadores/misdatos.html.twig', [
            'misdatos' => $misdatos
        ]);
    }   
}
