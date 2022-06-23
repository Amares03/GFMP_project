<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Exception;
use Log;
use App\Models\certificate_link;
use App\Models\declaration;
use App\Models\for_office_use;
use App\Models\mode_of_payment;
use App\Models\nominated_beneficiaries;
use App\Models\personal_details;
use App\Models\terms_and_conditions;
use App\Models\types_of_product_purchased;

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
    // Get for_office_use list from database
    public function getForOfficeUseData(){
        try {
            $List = for_office_use::all();
            return response()->json($List);
        } catch (Exception $e) {
            Log::error($e);
        }
    }
    // Get mode_of_payment list from database
    public function getModeOfPaymentData(){
        try {
            $List = mode_of_payment::all();
            return response()->json($List);
        } catch (Exception $e) {
            Log::error($e);
        }
    }
    // Get nominated_beneficiaries list from database
    public function getNominatedBeneficiariesData(){
        try {
            $List = nominated_beneficiaries::all();
            return response()->json($List);
        } catch (Exception $e) {
            Log::error($e);
        }
    }
    // Get personal_details list from database
    public function getPersonalDetailsData(){
        try {
            $List = personal_details::all();
            return response()->json($List);
        } catch (Exception $e) {
            Log::error($e);
        }
    }
    // Get terms_and_conditions list from database
    public function getTermsAndConditionsData(){
        try {
            $List = terms_and_conditions::all();
            return response()->json($List);
        } catch (Exception $e) {
            Log::error($e);
        }
    }
    // Get types_of_product_purchased list from database
    public function getTypesOfProductPurchasedData(){
        try {
            $List = types_of_product_purchased::all();
            return response()->json($List);
        } catch (Exception $e) {
            Log::error($e);
        }
    }
}
