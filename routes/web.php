<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\WebController;


// Route::get('/', function () {
//     return view('welcome');
// });
Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/about', [HomeController::class, 'indexAbout'])->name('home');
Route::get('/info', [HomeController::class, 'indexInfo'])->name('home');
Route::get('/kant', [WebController::class, 'index'])->name('kant');
Route::get('/mtf', [WebController::class, 'indexMtf'])->name('mtf');
Route::get('/canvas', [WebController::class, 'indexCanvas'])->name('canvas');
Route::get('/mas', [WebController::class, 'indexMas'])->name('mas');
Route::get('/noyy', [WebController::class, 'indexNoyy'])->name('noyy');
