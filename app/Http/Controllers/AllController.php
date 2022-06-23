<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Exception;
use Log;
use App\Models\certificate_link;
use App\Models\declaration;

class AllController extends Controller
{
    // GET ALL TABLES DATA

     // Get certificate list from database
    public function getCertificateData(){
        try {
            $List = certificate_link::all();
            return response()->json($List);
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    // Get declaration list from database
    public function getDeclarationData(){
        try {
            $List = declaration::all();
            return response()->json($List);
        } catch (Exception $e) {
            Log::error($e);
        }
    }
}
