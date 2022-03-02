<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Comments;
use App\Models\User;

class CommentsController extends Controller
{

    /**
     * Display a listing of the comments.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if(Auth::check()){
            $comments = Comments::all();
            // Loops thru all comments and sends the username
            foreach($comments as $comment){
                $comment->username = User::where('id', $comment->users_id)->first()->username;
            }
            return ['comments' => $comments];
        } else {
            return ['we could not validate you, please log in and try again' => 400];
        }

    }


    /**
     * Store a newly created comment in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if(Auth::check()){
            $comment = new Comments();
            $comment->users_id = Auth::id();
            $comment->body = $request->body;
            $comment->posts_id = $request->posts_id;
            $comment->save();
            // adds the username for the user creating the comment
            $comment->username = User::where('id', $comment->users_id)->first()->username;

            return ['comment' => $comment];
        } else {
            return ['we could not validate you, please log in and try again' => 400];
        }
    }

    /**
     * Display the specified comment.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if (Auth::check()) {
            $comments = Comments::where('id', $id)->first();
            // adds the username for the user who created this comment
            $comments->username = User::where('id', $comments->users_id)->first()->username;
            return ['comments' => $comments];
        } else {
            return ['we could not validate you, please log in and try again' => 400];
        }

    }


    /**
     * Remove the specified comment from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        if(Auth::check()){
            $comment = Comments::where('id', $id)->first();
            $comment->delete();
            return 'The comment has been deleted';
        } else{
            return ['we could not validate you, please log in and try again' => 400];
        }
    }
}