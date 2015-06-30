class Document < ActiveRecord::Base
  mount_uploader :file, FileUploader
  mount_uploader :file, FileTranslationUploader
end
