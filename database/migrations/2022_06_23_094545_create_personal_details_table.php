<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personal_details', function (Blueprint $table) {
            $table->id();
            $table->string('surname');
            $table->string('first_name');
            $table->date('date');
            $table->string('martial_status');
            $table->string('name_of_spouse');
            $table->string('nationality');
            $table->string('physical_address');
            $table->string('postal_address');
            $table->string('employer');
            $table->string('occupation');
            $table->string('tel_no_home');
            $table->string('cell');
            $table->string('tel_no_business');
            $table->string('email');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('personal_details');
    }
};
