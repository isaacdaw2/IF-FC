<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

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
}
