class CreateDocuments < ActiveRecord::Migration
  def change
    create_table :documents do |t|
      t.integer :company_id
      t.integer :doc_category_id
      t.integer :content_id
      t.string :name
      t.string :name_translation
      t.string :file
      t.string :file_translation
      t.date :release_date

      t.timestamps null: false
    end
  end
end
