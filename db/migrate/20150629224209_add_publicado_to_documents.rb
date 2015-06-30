class AddPublicadoToDocuments < ActiveRecord::Migration
  def change
    add_column :documents, :publicado, :boolean
  end
end
