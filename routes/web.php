<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AllController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/get/certificate/data',[AllController::class, 'getCertificateData'])->name('certificate.data');
Route::get('/get/declaration/data',[AllController::class, 'getDeclarationData'])->name('declaration.data');
Route::get('/get/for_office_use/data',[AllController::class, 'getForOfficeUseData'])->name('for_office_use.data');
Route::get('/get/mode_of_payment/data',[AllController::class, 'getModeOfPaymentData'])->name('mode_of_payment.data');
Route::get('/get/nominated_beneficiaries/data',[AllController::class, 'getNominatedBeneficiariesData'])->name('nominated_beneficiaries.data');
Route::get('/get/personal_details/data',[AllController::class, 'getPersonalDetailsData'])->name('personal_details.data');
Route::get('/get/terms_and_conditions/data',[AllController::class, 'getTermsAndConditionsData'])->name('terms_and_conditions.data');
Route::get('/get/types_of_product_purchased/data',[AllController::class, 'getTypesOfProductPurchasedData'])->name('types_of_product_purchased.data');