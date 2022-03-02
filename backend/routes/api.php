<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\SnusController;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\CategorysController;
use App\Http\Controllers\FlavoursController;
use App\Http\Controllers\ReviewsController;
use App\Http\Controllers\FavouritesController;
use App\Http\Controllers\CommentsController;
use App\Http\Controllers\SearchController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider zwithin a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {
    Route::post('/login', [AuthController::class, 'login']); //this block handels Auth routes and jwt tokens
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/refresh', [AuthController::class, 'refresh']);

    Route::get('/user-profile', [AuthController::class, 'userProfile']); //this block handels all get routes for sending data to frontend
    Route::get('/snuses', [SnusController::class, 'index']);
    Route::get('/snuses/{id}', [SnusController::class, 'show']);
    Route::get('/categorys', [CategorysController::class, 'index']);
    Route::get('/categorys/{id}', [CategorysController::class, 'show']);
    Route::get('/posts', [PostsController::class, 'index']);
    Route::get('/posts/{id}', [PostsController::class, 'show']);
    Route::get('/comments', [CommentsController::class, 'index']);
    Route::get('/comments/{id}', [CommentsController::class, 'show']);  
    Route::get('/reviews', [ReviewsController::class, 'index']);
    Route::get('/reviews/{id}', [ReviewsController::class, 'show']);
    Route::get('/flavours', [FlavoursController::class, 'index']);
    Route::get('/flavours/{id}', [FlavoursController::class, 'show']);
    Route::get('/favourites/{id}', [FavouritesController::class, 'show']);
    Route::get('/favourites', [FavouritesController::class, 'index']);

    Route::post('/store-posts', [PostsController::class, 'store']); //this block handels all routes related to storing data to db
    Route::post('/store-reviews', [ReviewsController::class, 'store']);
    Route::post('/store-favourites', [FavouritesController::class, 'store']);
    Route::post('/store-comments', [CommentsController::class, 'store']);
    Route::post('/store-snuses', [SnusController::class, 'store']);

    Route::post('/delete-posts/{id}', [PostsController::class, 'destroy']); //this block handels all routes related to removing data from db
    Route::post('/delete-reviews/{id}', [ReviewsController::class, 'destroy']);
    Route::post('/delete-favourites/{id}', [FavouritesController::class, 'destroy']);
    Route::post('/delete-comments/{id}', [CommentsController::class, 'destroy']);
    Route::post('/delete-snuses/{id}', [SnusController::class, 'destroy']);

    Route::get('search/{key}', [SearchController::class, 'search']); //route used when searching the site

});
