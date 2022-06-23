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
            $table->string('surname',100);
            $table->string('first_name',100);
            $table->date('date');
            $table->enum('martial_status', array('Married', 'Single','Widowed','Divorced'));
            $table->string('name_of_spouse',200);
            $table->string('nationality',100);
            $table->string('physical_address',200);
            $table->string('postal_address',200);
            $table->string('employer',100);
            $table->string('occupation',100);
            $table->string('tel_no_home',100);
            $table->string('cell',100);
            $table->string('tel_no_business',100);
            $table->string('email',100);
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
