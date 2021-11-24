<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use App\Models\Category;
use App\Models\Question;
use App\Models\Reply;
use App\Models\Like;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        User::factory(30)->create();
        Category::factory(3)->create();
        Question::factory(10)->create();
        Reply::factory(50)->create()->each(function ($reply) {
            return $reply->like()->save(Like::factory()->make());
        });
    }
}
