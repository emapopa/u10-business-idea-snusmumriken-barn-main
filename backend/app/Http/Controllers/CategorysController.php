<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Categorys;
use App\Models\Posts;
use App\Models\User;


class CategorysController extends Controller
{

    /**
     * Display a listing of the categorys.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(Auth::check()){
            $categorys = Categorys::all();

            return ['categorys' => $categorys];
        } else {
            return ['we could not validate you, please log in and try again' => 400];
        }
    }

    /**
     * Display the specified category.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if(Auth::check()){
            $category = Categorys::where('id', $id)->first();
            $posts = Posts::where('categorys_id', $id)->get();
            // Loops thru all posts and sends the usernames for all posts
            foreach($posts as $post){
                $post->username = User::where('id', $post->users_id)->first()->username;
            }
            return ['category' => $category, 'posts' => $posts];
        } else {
            return ['we could not validate you, please log in and try again' => 400];
        }

    }

}
