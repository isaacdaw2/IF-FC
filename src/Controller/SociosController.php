<?php

namespace App\Controller;

use App\Entity\Socios;
use App\Form\SociosType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class SociosController extends AbstractController
{
    /**
     * @Route("/pago-socios", name="pago-socios")
     */
    public function pagoSocios(Request $request)
    {
        if($request->isXmlHttpRequest()){
            $em = $this->getDoctrine()->getManager();
            $usuario = $this->getUser();
            $metodoPago = $request->request->get('pago');
            $socio = new Socios();
            $socio->setUsuarios($usuario);
            $socio->setMetodoPago($metodoPago);
            $em->persist($socio);
            $em->flush();

            return new JsonResponse('Socio abonado correctamente');

        } else {
            throw new \Exception("No autorizado");
        }
    }
}
