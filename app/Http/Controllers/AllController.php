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

    public function getCertificateUser(certificate_link $id){
        try {
            return response()->json($id);
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

    // delete individual user

    //delete certificate user
    public function deleteCertificateUser(certificate_link $id){
        try {
            $id->delete();
        } catch (Exception $e) {
            Log::error($e);
        }
    }
    //delete declaration user
    public function deleteDeclarationUser(declaration $id){
        try {
            $id->delete();
        } catch (Exception $e) {
            Log::error($e);
        }
    }
    //delete for_office_use user
    public function deleteForOfficeUseUser(for_office_use $id){
        try {
            $id->delete();
        } catch (Exception $e) {
            Log::error($e);
        }
    }
    //delete mode_of_payment user
    public function deleteModeOfPaymentUser(mode_of_payment $id){
        try {
            $id->delete();
        } catch (Exception $e) {
            Log::error($e);
        }
    }
    //delete nominated_beneficiaries user
    public function deleteNominatedBeneficiariesUser(nominated_beneficiaries $id){
        try {
            $id->delete();
        } catch (Exception $e) {
            Log::error($e);
        }
    }
    //delete personal_details user
    public function deletePersonalDetailsUser(personal_details $id){
        try {
            $id->delete();
        } catch (Exception $e) {
            Log::error($e);
        }
    }
    //delete terms_and_conditions user
    public function deleteTermsAndConditionsUser(terms_and_conditions $id){
        try {
            $id->delete();
        } catch (Exception $e) {
            Log::error($e);
        }
    }
    //delete types_of_product_purchased user
    public function deleteTypesOfProductPurchasedUser(types_of_product_purchased $id){
        try {
            $id->delete();
        } catch (Exception $e) {
            Log::error($e);
        }
    }

    //UPDATE USERS
    //update certificate user
     public function updateCertificateUser(Request $request){
        try {
            $id = $request->get('id');
            
           

              $list = certificate_link::where('id',$id)->update([
                'certificate' => $request->get('certificate'),
            ]);

            return response()->json($list);

        } catch (Exception $e) {
            Log::error($e);
        }
     }

     //update declaration user
     public function updateDeclarationUser(Request $request){
         try {
            $id = $request->get('id');

              $list = declaration::where('id',$id)->update([
                'Blank1' => $request->get('Blank1'),
                'Blank2' => $request->get('Blank2'),
                'Blank3' => $request->get('Blank3'),
                'Blank4' => $request->get('Blank4'),
                'Blank5' => $request->get('Blank5'),
                'Blank6' => $request->get('Blank6'),
                'Blank7' => $request->get('Blank7'),
            ]);

            return response()->json($list);

        } catch (Exception $e) {
            Log::error($e);
        }
     }
     //update for_office_use user
     public function updateForOfficeUseUser(Request $request){
         try {
            $id = $request->get('id');

              $list = for_office_use::where('id',$id)->update([
                'application' => $request->get('application'),
                'payment_period' => $request->get('payment_period'),
                'cash' => $request->get('cash'),
                'months_3' => $request->get('months_3'),
                'months_6' => $request->get('months_6'),
                'other' => $request->get('other'),
                'monthly_instalment' => $request->get('monthly_instalment'),
                'authorized_signatory' => $request->get('authorized_signatory'),
                'plot_number' => $request->get('plot_number'),
            ]);

            return response()->json($list);

        } catch (Exception $e) {
            Log::error($e);
        }
     }
     //update mode_of_payment user
     public function updateModeOfPaymentUser(Request $request){
         try {
            $id = $request->get('id');

              $list = mode_of_payment::where('id',$id)->update([
                'months_3' => $request->get('months_3'),
                'months_6' => $request->get('months_6'),
                'amount_of_initial_disposal' => $request->get('amount_of_initial_disposal'),
            ]);

            return response()->json($list);

        } catch (Exception $e) {
            Log::error($e);
        }
     }
     //update nominated_beneficiaries user
     public function updateNominatedBeneficiariesUser(Request $request){
         try {
            $id = $request->get('id');

              $list = nominated_beneficiaries::where('id',$id)->update([
                'name' => $request->get('name'),
                'age' => $request->get('age'),
                'relationship' => $request->get('relationship'),
            ]);

            return response()->json($list);

        } catch (Exception $e) {
            Log::error($e);
        }
     }
      //update personal_details user
     public function updatePersonalDetailsUser(Request $request){
         try {
            $id = $request->get('id');

              $list = personal_details::where('id',$id)->update([
                'surname' => $request->get('surname'),
                'first_name' => $request->get('first_name'),
                'date' => $request->get('date'),
                'martial_status' => $request->get('martial_status'),
                'name_of_spouse' => $request->get('name_of_spouse'),
                'physical_address' => $request->get('physical_address'),
                'postal_address' => $request->get('postal_address'),
                'employer' => $request->get('employer'),
                'occupation' => $request->get('occupation'),
                'tel_no_home' => $request->get('tel_no_home'),
                'cell' => $request->get('cell'),
                'tel_no_business' => $request->get('tel_no_business'),
                'email' => $request->get('email'),
            ]);

            return response()->json($list);

        } catch (Exception $e) {
            Log::error($e);
        }
     }
      //update terms_and_conditions user
     public function updateTermsAndConditionsUser(Request $request){
         try {
            $id = $request->get('id');

              $list = terms_and_conditions::where('id',$id)->update([
                'terms_table' => $request->get('terms_table'),
   
            ]);

            return response()->json($list);

        } catch (Exception $e) {
            Log::error($e);
        }
     }
      //update types_of_product_purchased user
     public function updateTypesOfProductPurchasedUser(Request $request){
         try {
            $id = $request->get('id');

              $list = types_of_product_purchased::where('id',$id)->update([
                'glen_forest_memorial_park' => $request->get('glen_forest_memorial_park'),
                'chemhute_park' => $request->get('chemhute_park'),
                'matidoda_park' => $request->get('matidoda_park'),
                'single_unit' => $request->get('single_unit'),
                'double_unit' => $request->get('double_unit'),
                'triple_unit' => $request->get('triple_unit'),
                'family_close' => $request->get('family_close'),
                'other_detail' => $request->get('other_detail'),
            ]);

            return response()->json($list);

        } catch (Exception $e) {
            Log::error($e);
        }
     }


     //ADD USERS
    //add certificate user
     public function addCertificateUser(Request $request){
        try {
              $list = certificate_link::create([
                'certificate' => $request->get('certificate'),
            ]);

            return response()->json($list);

        } catch (Exception $e) {
            Log::error($e);
        }
     }
}
