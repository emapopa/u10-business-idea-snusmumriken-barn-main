<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Snuses;
use App\Models\User;
use App\Models\Reviews;
use App\Models\Flavours;


class SnusController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index() //send back all snuses in db along with relevant info
    {
        if (Auth::check()) { //checks if user is logged in
            $snuses = Snuses::all();
            foreach ($snuses as $snus){ //adds the average rating of all reviews related to a specific snus
                 $snus->avgRating = $snus->avgRating();
            }
            foreach($snuses as $snus){ //adds name of flavour to each snus
                $snus->flavour_name = Flavours::where('id', $snus->flavours_id)->first()->flavour_type;
            }
            return ['snuses' => $snuses];
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
        if(Auth::check()){ //creates a new snus based on data from request then saves it to db
            $snus = new Snuses();
            $snus->name = $request->name;
            $snus->type = $request->type;
            $snus->strength = $request->strength;
            $snus->img_url = $request->img_url;
            $snus->flavours_id = $request->flavours_id;
            $snus->save();
            return ['snus' => $snus, 'message' => 'The snus ' . $snus->name . ' ' . $snus->type . ' has been created!'];
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
    public function show($id)
    {
        if (Auth::check()) { //sends back a snus based on its id along with its reviews
            $snus = Snuses::where('id', $id)->first();
            $snus->avgRating = $snus->avgRating(); //adds the average rating of all reviews of the snus
            $reviews = Reviews::where('snuses_id', $id)->get();
            
            $snus->flavour_name = Flavours::where('id', $snus->flavours_id)->first()->flavour_type; //adds the name of flavour to the snus
            foreach ($reviews as $review){
                $review->username = User::where('id', $review->users_id)->first()->username; // adds creators username to each review
            }
            return ['snus' => $snus, 'reviews' => $reviews];
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
    public function destroy($id)
    {
        if(Auth::check()){// removes a specific snus
            $snus = Snuses::where('id', $id)->first();
            $snus->delete();
            return ['message' => 'The snus ' . $snus->name . ' ' . $snus->type . ' has been deleted'];
        } else{
            return ['we could not validate you, please log in and try again' => 400];
        }
    }
}
