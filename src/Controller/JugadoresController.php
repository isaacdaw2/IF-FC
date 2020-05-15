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
     * @Route("/pago-jugadores", name="pago-jugadores")
     */
    public function pagoJugadores(Request $request)
    {
        if($request->isXmlHttpRequest()){
            $em = $this->getDoctrine()->getManager();
            $usuario = $this->getUser();
            $categoria = $request->request->get('categoria');
            $tallaCamiseta = $request->request->get('tallaCamiseta');
            $tallaPantalon = $request->request->get('tallaPantalon');
            $tallaMedias = $request->request->get('tallaMedias');
            $tallaAbrigo = $request->request->get('tallaAbrigo');
            $metodoPago = $request->request->get('pagoJugador');
            $jugador = new Jugadores();
            $jugador->setUsuarios($usuario);
            $jugador->setCategoria($categoria);
            $jugador->setTallaCamiseta($tallaCamiseta);
            $jugador->setTallaPantalon($tallaPantalon);
            $jugador->setTallaMedias($tallaMedias);
            $jugador->setTallaAbrigo($tallaAbrigo);
            $jugador->setMetodoPago($metodoPago);
            $em->persist($jugador);
            $em->flush();

            return new JsonResponse('Pago completado');

        } else {
            throw new \Exception("No autorizado");
        }
    }
}
