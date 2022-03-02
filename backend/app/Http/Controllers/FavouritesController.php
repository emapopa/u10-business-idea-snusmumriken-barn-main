<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Favourites;
use App\Models\User;
use App\Models\Flavours;
use App\Models\Snuses;

class FavouritesController extends Controller
{

    /**
     * Display a listing of all favourites.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        if (Auth::check()) {
            $favourites = Favourites::all();
            return ['favourites' => $favourites ];
        } else {
            return ['we could not validate you, please log in and try again' => 400];
        }

    }


    /**
     * Store a newly created favourite in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
      {
         if(Auth::check()){
            $favourites = new Favourites();
            $favourites->users_id = Auth::id();
            $favourites->flavours_id = $request->flavours_id;
            $favourites->save();
            // adds the username for the user having this favourite
            $favourites->username = User::where('id',  $favourites->users_id)->first()->username;

            return ['favourites' =>  $favourites, 'message' => 'added to your favourites!'];
         } else {
            return ['Please Login to view your Favourites' => 400];
        }


    }

    /**
     * Display one specific users favourites.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        if (Auth::check()) {
            $favourites = Favourites::where('users_id', $id)->get();
            foreach ($favourites as $favourite) {
                $favourite->name= Flavours::where('id', $favourite->flavours_id)->first()->flavour_type;
            }
            return ['favourites' => $favourites];
        } else {
            return ['Please Login to view your Favourites' => 400];
        }

    }


    // /**
    //  * Remove the specified favourite from storage.
    //  *
    //  * @param  int  $id
    //  * @return \Illuminate\Http\Response
    //  */
    public function destroy($id)
    {
        if(Auth::check()){
            $favourite = Favourites::where('id', $id)->first();
            $favourite->delete();
            return ['message' => 'The favourite has been deleted'];
        } else{
            return ['we could not validate you, please log in and try again' => 400];
        }
    }
}