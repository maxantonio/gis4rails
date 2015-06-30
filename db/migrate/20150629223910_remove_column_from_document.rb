class RemoveColumnFromDocument < ActiveRecord::Migration
  def change
    remove_column :documents, :publicado, :integer
  end
end
