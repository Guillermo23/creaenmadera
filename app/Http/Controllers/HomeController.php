<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use Mail;
use App\Mail\MyTestMail;


class HomeController extends Controller
{

    /**
     * Send My Test Mail Example
     *
     * @return void
     */
    public function myTestMail(Request $request)
    {
      var_dump("si que si", $request->name);
    	$myEmail = 'carapisssag@gmail.com';
    	Mail::to($myEmail)->send(new MyTestMail());


    	dd("Mail Send Successfully");
    }


}
