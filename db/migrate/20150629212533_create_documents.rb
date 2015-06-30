class CreateDocuments < ActiveRecord::Migration
  def change
    create_table :documents do |t|
      t.integer :company_id
      t.integer :doc_category_id
      t.integer :user_id
      t.integer :language
      t.string :name
      t.string :file
      t.date :release_date

      t.timestamps null: false
    end
  end
end
