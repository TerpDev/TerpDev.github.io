<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class WebController extends Controller
{
    public function index()
    {
        return Inertia::render('Websites/Kant');
    }
    public function indexMtf()
    {
        return Inertia::render('Websites/Mtf');
    }
    public function indexCanvas()
    {
        return Inertia::render('Websites/Canvas');
    }
    public function indexMas()
    {
        return Inertia::render('Websites/Mas');
    }
    public function indexNoyy()
    {
        return Inertia::render('Websites/Noyy');
    }
}
