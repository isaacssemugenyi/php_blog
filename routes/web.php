<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});



Route::get('/dashboard', function () {
    return view('welcome');
});
Route::get('/addPosts', function () {
    return view('welcome');
});
Route::get('/edit/:id', function () {
    return view('welcome');
});

Route::post('/addPost', 'App\Http\Controllers\postsController@store');

Route::get('/posts', 'App\Http\Controllers\postsController@index');
