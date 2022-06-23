<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Exception;
use Log;
use App\Models\certificate_link;

class AllController extends Controller
{
     // Get certificate list from database
    public function getCertificateData(){
        try {
            $certificateList = certificate_link::all();
            return response()->json($certificateList);
        } catch (Exception $e) {
            Log::error($e);
        }
    }
}
