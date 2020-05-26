<?php

namespace App\Controller;

use App\Entity\Usuarios;
use App\Entity\Jugadores;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;
use Symfony\Component\Validator\Constraints\Date;
use Symfony\Component\HttpFoundation\RequestStack;

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
            $fechaString = $request->request->get('fecha');
            $fechaDate = \DateTime::createFromFormat('Y-m-d', $fechaString);
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
            $usuario->setFechaNacimiento($fechaDate);
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

    /**
     * @Route("/usuarios/{id}", name="usuarios", options={"expose"=true})
     */
    public function usuariosId($id)
    {
        $em = $this->getDoctrine()->getManager();
        $usuario = $em->getRepository(Usuarios::class)->find($id);

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
     * @Route("/todos/{id}", name="todos", options={"expose"=true}, methods="DELETE")
     */
    public function todosUsuarios(Request $request, $id)
    {
        $em = $this->getDoctrine()->getManager();
        $usuarios = $em->getRepository(Usuarios::class)->findAll();

        for ($i = 0; $i < count($usuarios); $i++) {
            
            $data[$i] = [
                'id'=> $usuarios[$i]->getId(),
                'email' => $usuarios[$i]->getEmail(),
                'role' => $usuarios[$i]->getRoles(),
                'dni' => $usuarios[$i]->getDni(),
                'password' => $usuarios[$i]->getPassword(),
                'confirmPass' => $usuarios[$i]->getConfirmPass(),
                'nombre' => $usuarios[$i]->getNombre(),
                'apellidos' => $usuarios[$i]->getApellidos(),
                'fechaNacimiento' => $usuarios[$i]->getfechaNacimiento(),
                'calle' => $usuarios[$i]->getcalle(),
                'localidad' => $usuarios[$i]->getLocalidad(),
                'provincia' => $usuarios[$i]->getProvincia(),
                'cp' => $usuarios[$i]->getCp()
            ];
        }

        $em->persist($data);
        $em->flush();


        return new JsonResponse($data[$id-1], Response::HTTP_OK);
    }

    /**
     * @Route("/eliminar-usuario", options={"expose"=true}, name="eliminar-usuario")
     */
    public function eliminarUsuario(Request $request)
    {
        if ($request->isXmlHttpRequest()) {
            $em = $this->getDoctrine()->getManager();
            $usuario = $this->getUser();
            
            $em->remove($usuario);
            $em->flush();

            $this->get('security.token_storage')->setToken(null);
            $request->getSession()->invalidate();
            
            return new JsonResponse('Usuario borrado', Response::HTTP_OK);

        } else {
            throw new \Exception('Accesso negado');
        }
    }
}
