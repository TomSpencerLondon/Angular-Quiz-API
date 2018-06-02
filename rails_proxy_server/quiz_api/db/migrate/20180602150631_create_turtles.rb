class CreateTurtles < ActiveRecord::Migration[5.1]
  def change
    create_table :turtles do |t|
      t.string :name
      t.string :image_url
      t.string :locations
      t.string :size
      t.string :lifespan
      t.string :diet
      t.string :description

      t.timestamps
    end
  end
end
