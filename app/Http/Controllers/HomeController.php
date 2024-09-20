<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home');
    }
    public function indexAbout()
    {
        return Inertia::render('About');
    }
    public function indexInfo()
    {
        return Inertia::render('Info');
    }
}
