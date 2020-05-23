<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UsuariosController extends AbstractController
{
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
                'password' => $usuario->getPassword(),
                'confirmPass' => $usuario->getConfirmPass(),
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

    /**
     * @Route("/editar-datos", options={"expose"=true}, name="editar-datos", methods={"PUT"})
     */
    public function editarDatos(Request $request, UserPasswordEncoderInterface $passwordEncoder)
    {
        if($request->isXmlHttpRequest()){
            $em = $this->getDoctrine()->getManager();
            $usuario = $this->getUser();
            $nombre = $request->request->get('nombre');
            $apellidos = $request->request->get('apellidos');
            $email = $request->request->get('email');
            $pass = $request->request->get('pass');
            $confirmPass = $request->request->get('confirmPass');
            $dni = $request->request->get('dni');
            $calle = $request->request->get('calle');
            $localidad = $request->request->get('localidad');
            $provincia = $request->request->get('provincia');
            $cp = $request->request->get('cp');
            $usuario->setNombre($nombre);
            $usuario->setApellidos($apellidos);
            $usuario->setEmail($email);
            $usuario->setPassword($passwordEncoder->encodePassword($usuario, $pass));
            $usuario->setDni($dni);
            $usuario->setCalle($calle);
            $usuario->setLocalidad($localidad);
            $usuario->setProvincia($provincia);
            $usuario->setCp($cp);
            $em->persist($usuario);
            $em->flush();

            return new JsonResponse('Modificación realizada');
        } else {
            throw new \Exception("No autorizado");
        }
    }
}
