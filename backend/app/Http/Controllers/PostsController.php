<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Posts;
use App\Models\User;


class PostsController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(Auth::check()) { // sends all posts along with creators username
            $posts = Posts::all();
            foreach($posts as $post){
                $post->username = User::where('id', $post->users_id)->first()->username;
            }
            return ['posts' => $posts];
        } else {
            return ['Not authorized' => 400];
        }

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if(Auth::check()){ //stores post based on request and sends it back with creators username
            $post = new Posts();
            $post->users_id = Auth::id();
            $post->title = $request->title;
            $post->body = $request->body;
            $post->categorys_id = $request->categorys_id;
            $post->save();
            $post->username = User::where('id', $post->users_id)->first()->username;

            return ['post' => $post, 'message' => 'Your post has been posted!'];
        } else {
            return ['we could not validate you, please log in and try again' => 400];
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id) //sends back a specific post with its comments and its category
    {
        if(Auth::check()){
            $post = Posts::where('id', $id)->first();
            $post->username = User::where('id', $post->users_id)->first()->username; //adds creators username to post
            $categorys = $post->categorys(); 
            $comments = $post->comments();
            foreach($comments as $comment){
                $comment->username = User::where('id', $comment->users_id)->first()->username; //adds username of creator to comment
            }
            return ['post' => $post, 'categorys' => $categorys, 'comments' => $comments];
        }else{
            return ['we could not validate you, please log in and try again' => 400];
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) //deletes a post based on id
    {
        if(Auth::check()){
            $post = Posts::where('id', $id)->first();
            $post->delete();
            return ['message' => 'Your post has been deleted'];
        } else{
            return ['we could not validate you, please log in and try again' => 400];
        }
    }
}