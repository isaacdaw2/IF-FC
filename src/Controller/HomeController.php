<?php

namespace App\Controller;

use App\Entity\Usuarios;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;

class HomeController extends AbstractController
{
    /**
     * @Route("/", name="home")
     */
    public function index() {
        $usuario = $this->getUser();
        if($usuario) {
            return $this->render('home/index.html.twig');
        } else {
            return $this->redirectToRoute('app_login');
        }
    }

    /**
     * @Route("/misdatos", options={"expose"=true}, name="misdatos", methods={"GET"})
     */
    public function misDatos(Request $request)
    {
        $usuario = $this->getUser();

            $data = [
                'id'=> $usuario->getId(),
                'email' => $usuario->getEmail(),
                'dni' => $usuario->getDni(),
                'nombre' => $usuario->getNombre(),
                'apellidos' => $usuario->getApellidos(),
                'fechaNacimiento' => $usuario->getfechaNacimiento(),
                'calle' => $usuario->getcalle(),
                'localidad' => $usuario->getLocalidad(),
                'provincia' => $usuario->getProvincia(),
                'cp' => $usuario->getCp()
            ];

        return new JsonResponse($data, Response::HTTP_OK);
    }

}
