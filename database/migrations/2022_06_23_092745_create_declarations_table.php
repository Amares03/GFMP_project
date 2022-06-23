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
        Schema::create('declarations', function (Blueprint $table) {
            $table->id();
            $table->string('Blank1',200);
            $table->string('Blank2',200);
            $table->string('Blank3',200);
            $table->string('Blank4',200);
            $table->string('Blank5',200);
            $table->string('Blank6',200);
            $table->string('Blank7',200);
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
        Schema::dropIfExists('declarations');
    }
};
