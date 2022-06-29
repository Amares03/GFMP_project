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


Route::delete('delete/certificate/data/{id}',[AllController::class, 'deleteCertificateUser'])->name('certificate.delete');
Route::delete('delete/declaration/data/{id}',[AllController::class, 'deleteDeclarationUser'])->name('declaration.delete');
Route::delete('delete/for_office_use/data/{id}',[AllController::class, 'deleteForOfficeUseUser'])->name('for_office_use.delete');
Route::delete('delete/mode_of_payment/data/{id}',[AllController::class, 'deleteModeOfPaymentUser'])->name('mode_of_payment.delete');
Route::delete('delete/nominated_beneficiaries/data/{id}',[AllController::class, 'deleteNominatedBeneficiariesUser'])->name('nominated_beneficiaries.delete');
Route::delete('delete/personal_details/data/{id}',[AllController::class, 'deletePersonalDetailsUser'])->name('personal_details.delete');
Route::delete('delete/terms_and_conditions/data/{id}',[AllController::class, 'deleteTermsAndConditionsUser'])->name('terms_and_conditions.delete');
Route::delete('delete/types_of_product_purchased/data/{id}',[AllController::class, 'deleteTypesOfProductPurchasedUser'])->name('types_of_product_purchased.delete');


Route::post('update/certificate/user',[AllController::class, 'updateCertificateUser'])->name('certificate.update');
Route::post('update/declaration/user',[AllController::class, 'updateDeclarationUser'])->name('declaration.update');
Route::post('update/for_office_use/user',[AllController::class, 'updateForOfficeUseUser'])->name('for_office_use.update');
Route::post('update/mode_of_payment/user',[AllController::class, 'updateModeOfPaymentUser'])->name('mode_of_payment.update');
Route::post('update/nominated_beneficiaries/user',[AllController::class, 'updateNominatedBeneficiariesUser'])->name('nominated_beneficiaries.update');
Route::post('update/personal_details/user',[AllController::class, 'updatePersonalDetailsUser'])->name('personal_details.update');
Route::post('update/terms_and_conditions/user',[AllController::class, 'updateTermsAndConditionsUser'])->name('terms_and_conditions.update');
Route::post('update/types_of_product_purchased/user',[AllController::class, 'updateTypesOfProductPurchasedUser'])->name('types_of_product_purchased.update');




Route::post('add/certificate/user',[AllController::class, 'addCertificateUser'])->name('certificate.add');
Route::post('add/declaration/user',[AllController::class, 'addDeclarationUser'])->name('declaration.add');
Route::post('add/for_office_use/user',[AllController::class, 'addForOfficeUseUser'])->name('for_office_use.add');
Route::post('add/mode_of_payment/user',[AllController::class, 'addModeOfPaymentUser'])->name('mode_of_payment.add');
Route::post('add/nominated_beneficiaries/user',[AllController::class, 'addNominatedBeneficiariesUser'])->name('nominated_beneficiaries.add');
Route::post('add/personal_details/user',[AllController::class, 'addPersonalDetailsUser'])->name('personal_details.add');
Route::post('add/terms_and_conditions/user',[AllController::class, 'addTermsAndConditionsUser'])->name('terms_and_conditions.add');
Route::post('add/types_of_product_purchased/user',[AllController::class, 'addTypesOfProductPurchasedUser'])->name('types_of_product_purchased.add');





Route::post('add/all/user',[AllController::class, 'addAll'])->name('all.add');



