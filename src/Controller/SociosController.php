<?php

namespace App\Controller;

use App\Entity\Socios;
use App\Form\SociosType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

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

    /**
     * @Route("/datos-socios", options={"expose"=true}, name="datos-socios", methods={"GET"})
     */
    public function datosSocio(Request $request)
    {
        $em = $this->getDoctrine()->getManager();
        $usuario = $this->getUser();
        $socio = $em->getRepository(Socios::class)->findOneBy(['usuarios' => $usuario]);

        if($socio) {
            $data = [
                'id'=> $socio->getId(),
                'pago' => $socio->getMetodoPago()
            ];
        
            return new JsonResponse($data, Response::HTTP_OK);            
        } else {
            return new JsonResponse('Este usuario no es un socio');
        }        
    }
}
