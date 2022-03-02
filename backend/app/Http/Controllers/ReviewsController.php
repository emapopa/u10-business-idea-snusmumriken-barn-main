<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Reviews;
use App\Models\User;

class ReviewsController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::check()) { //sends all reviews
            $reviews = Reviews::all();
            foreach($reviews as $review){
                $review->username = User::where('id', $review->users_id)->first()->username;// adds creators username to review
            }
            return ['reviews' => $reviews];
        } else {
            return ['we could not validate you, please log in and try again' => 400];
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
        if(Auth::check()){ // saves a review based on request sent, then returns it along with creators username
            $review = new Reviews();
            $review->users_id = Auth::id();
            $review->snuses_id = $request->snuses_id;
            $review->title = $request->title;
            $review->body = $request->body;
            if($request->rating > 5){
                $request->rating = 5;
            }
            $review->rating = $request->rating;
            $review->save();
            $review->username = User::where('id', $review->users_id)->first()->username;

            return ['review' => $review, 'message' => 'Your review has been posted!'];
        } else{
            return ['we could not validate you, please log in and try again' => 400];
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if (Auth::check()) { //sends a specific review and its creators username
            $review = Reviews::where('id', $id)->first();
            $review->username = User::where('id', $review->users_id)->first()->username;

            return ['review' => $review];
        } else {
            return ['we could not validate you, please log in and try again' => 400];
        }

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id) //deletes a review based on id
    {
        if(Auth::check()){
            $review = Reviews::where('id', $id)->first();
            $review->delete();
            return ['message' => 'Your review has been deleted'];
        } else{
            return ['we could not validate you, please log in and try again' => 400];
        }
    }
}