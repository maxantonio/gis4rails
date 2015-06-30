class Document < ActiveRecord::Base
  mount_uploader :file, FileUploader
  mount_uploader :file_translation, FileTranslationUploader
end
