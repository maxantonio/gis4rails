
set :views, Proc.new { File.join("#{Rails.root}/lib/gis4Sinatra", "views") }

# Nombres de Menues


# Configuracion
configure do
  I18n.load_path = Dir[File.join("#{Rails.root}/lib/gis4Sinatra", 'locales', '*.yml')]
end

configure :development do
  use BetterErrors::Middleware
  BetterErrors.application_root = __dir__

end


#Globales
before do
@investor_cloud_path ="http://cdn.investorcloud.net/GIS"
@comunicados_path = "http://cdn.investorcloud.net/GIS/Comunicados"
@informes_anuales ="http://cdn.investorcloud.net/GIS/InformacionFinanciera/InformesAnuales"
@informes_trimestrales ="http://cdn.investorcloud.net/GIS/InformacionFinanciera/InformesTrimestrales"
@reportes_trimestrales_BMV ="http://cdn.investorcloud.net/GIS/InformacionFinanciera/ReportesTrimestralesBMV"
end

before '/:locale/*' do
  I18n.locale = params[:locale]
end

before '/' do
  I18n.locale = :es
end

before '/:locale' do
  I18n.locale = params[:locale]
end

get '/' do
  @menuNumber = 0
  @data= {:tituloES => 'Inicio', :tituloEn => 'Home' }
  erb :"es/layouts/index", :layout => :"es/layouts/application"

end

get '/es' do
  @menuNumber = 0
  @titulo = "GIS"
  @data= {:tituloES => 'Inicio', :tituloEn => 'Home' }
  erb :"/es/layouts/index", :layout => :"es/layouts/application"
end

get '/en' do
  @menuNumber = 0
  @titulo = "GIS"
  @data= {:tituloES => 'Inicio', :tituloEn => 'Home' }
  erb :"/en/layouts/index", :layout => :"es/layouts/application"
end


# Nombres de Menues


  $menuNamesEn=['PivotParaAjusteNumerico', 'About us', 'Corporate governance', "Financial information", "Stock information", "Results" ]
  $menuNamesEs=['PivotParaAjusteNumerico', 'Nosotros', 'Gobierno corporativo', "Información financiera", "Información bursátil" , "Resultados"]




# Menu 1

get '/:locale/perfil' do
  @data={:tituloES => 'Perfil', :tituloEn => "Profile", :menuNumber => 1}
  erb (I18n.locale.to_s+"/vistas/menu-1/perfil").to_sym, :layout => (I18n.locale.to_s+"/layouts/content").to_sym
end


get '/:locale/historia' do
  @data={:tituloES => 'Historia', :tituloEn => "History", :menuNumber => 1}
  erb (I18n.locale.to_s+"/vistas/menu-1/historia").to_sym, :layout => (I18n.locale.to_s+"/layouts/content").to_sym
end


get '/:locale/estrategia' do
  @data={:tituloES => 'Estrategia', :tituloEn => "Strategy", :menuNumber => 1}
  erb (I18n.locale.to_s+"/vistas/menu-1/estrategia").to_sym, :layout => (I18n.locale.to_s+"/layouts/content").to_sym
end


get '/:locale/gis-numeros' do
  @data={:tituloES => 'GIS en números', :tituloEn => "GIS in Numbers", :menuNumber => 1}
  erb (I18n.locale.to_s+"/vistas/menu-1/gis-numeros").to_sym, :layout => (I18n.locale.to_s+"/layouts/content").to_sym
end



get '/:locale/directivos' do
  @data={:tituloES => 'Equipo directivo', :tituloEn => "Management", :menuNumber => 1}
  erb (I18n.locale.to_s+"/vistas/menu-1/directivos").to_sym, :layout => (I18n.locale.to_s+"/layouts/content").to_sym
end


# Menu 2


get '/:locale/consejo-administracion' do
  @data={:tituloES => 'Consejo de Administración', :tituloEn => "Board of directors", :menuNumber => 2}
  erb (I18n.locale.to_s+"/vistas/menu-2/consejo-administracion").to_sym, :layout => (I18n.locale.to_s+"/layouts/content").to_sym
end

get '/:locale/comites' do
  @data={:tituloES => 'Comités', :tituloEn => "Committees", :menuNumber => 2}
  erb (I18n.locale.to_s+"/vistas/menu-2/comites").to_sym, :layout => (I18n.locale.to_s+"/layouts/content").to_sym
end

get '/:locale/codigos-estatutos' do
  @data={:tituloES => 'Códigos y estatutos', :tituloEn => "Bylaws", :menuNumber => 2}
  erb (I18n.locale.to_s+"/vistas/menu-2/codigos-estatutos").to_sym, :layout => (I18n.locale.to_s+"/layouts/content").to_sym
end

get '/:locale/estructura-accionaria' do
  @data={:tituloES => 'Estructura accionaria', :tituloEn => "Shareholder structure", :menuNumber => 2}
  erb (I18n.locale.to_s+"/vistas/menu-2/estructura-accionaria").to_sym, :layout => (I18n.locale.to_s+"/layouts/content").to_sym
end

get '/:locale/auditor-externo' do
  @data={:tituloES => 'Auditor externo', :tituloEn => "External auditor", :menuNumber => 2}
  erb (I18n.locale.to_s+"/vistas/menu-2/auditor-externo").to_sym, :layout => (I18n.locale.to_s+"/layouts/content").to_sym
end


# Menu 3

# Información financiera


get '/:locale/fundamentales' do
  @data={:tituloES => 'Fundamentales', :tituloEn => "Fundamentals", :menuNumber => 3}
  erb (I18n.locale.to_s+"/vistas/menu-3/fundamentales").to_sym, :layout => (I18n.locale.to_s+"/layouts/content").to_sym
end

get '/:locale/informes-trimestrales' do
  @data={:tituloES => 'Informes trimestrales', :tituloEn => "Earnings releases", :menuNumber => 3}
  erb (I18n.locale.to_s+"/vistas/menu-3/informes-trimestrales").to_sym, :layout => (I18n.locale.to_s+"/layouts/content").to_sym
end


get '/:locale/informes-anuales' do
  @data={:tituloES => 'Informes anuales', :tituloEn => "Annual reports", :menuNumber => 3}
  erb (I18n.locale.to_s+"/vistas/menu-3/informes-anuales").to_sym, :layout => (I18n.locale.to_s+"/layouts/content").to_sym
end


get '/:locale/comunicados' do
  @data={:tituloES => 'Eventos relevantes', :tituloEn => "Press releases", :menuNumber => 3}
  erb (I18n.locale.to_s+"/vistas/menu-3/comunicados").to_sym, :layout => (I18n.locale.to_s+"/layouts/content").to_sym
end


get '/:locale/registros-bmv' do
  @data={:tituloES => 'Registros BMV', :tituloEn => "BMV filings", :menuNumber => 3}
  erb (I18n.locale.to_s+"/vistas/menu-3/registros-bmv").to_sym, :layout => (I18n.locale.to_s+"/layouts/content").to_sym
end


get '/:locale/calendario-financiero' do
  @data={:tituloES => 'Calendario financiero', :tituloEn => "Financial calendar", :menuNumber => 3}
  erb (I18n.locale.to_s+"/vistas/menu-3/calendario-financiero").to_sym, :layout => (I18n.locale.to_s+"/layouts/content").to_sym
end


get '/:locale/preguntas-frecuentes' do
  @data={:tituloES => 'Preguntas frecuentes', :tituloEn => "FAQ", :menuNumber => 3}
  erb (I18n.locale.to_s+"/vistas/menu-3/preguntas-frecuentes").to_sym, :layout => (I18n.locale.to_s+"/layouts/content").to_sym
end


# Menu 4


get '/:locale/cotizacion-accion' do
  @data={:tituloES => 'Cotización de la acción', :tituloEn => "Stock quotes", :menuNumber => 4}
  erb (I18n.locale.to_s+"/vistas/menu-4/cotizacion-accion").to_sym, :layout => (I18n.locale.to_s+"/layouts/content").to_sym
end


get '/:locale/dividendos' do
  @data={:tituloES => 'Dividendos', :tituloEn => "Dividends", :menuNumber => 4}
  erb (I18n.locale.to_s+"/vistas/menu-4/dividendos").to_sym, :layout => (I18n.locale.to_s+"/layouts/content").to_sym
end


get '/:locale/razones-financieras' do
  @data={:tituloES => 'Razones financieras', :tituloEn => "Financial ratios", :menuNumber => 4}
  erb (I18n.locale.to_s+"/vistas/menu-4/razones-financieras").to_sym, :layout => (I18n.locale.to_s+"/layouts/content").to_sym
end


get '/:locale/cobertura-analistas' do
  @data={:tituloES => 'Cobertura de analistas', :tituloEn => "Analyst coverage", :menuNumber => 4}
  erb (I18n.locale.to_s+"/vistas/menu-4/cobertura-analistas").to_sym, :layout => (I18n.locale.to_s+"/layouts/content").to_sym
end


get '/:locale/glosario' do
  @data={:tituloES => 'Glosario', :tituloEn => "Glossary", :menuNumber => 4}
  erb (I18n.locale.to_s+"/vistas/menu-4/glosario").to_sym, :layout => (I18n.locale.to_s+"/layouts/content").to_sym
end



# Independientes

get '/:locale/resultados' do
  @data={:tituloES => '', :tituloEn => "", :menuNumber => 5}
  erb :"/multidioma/vistas/independientes/resultados", :layout => (I18n.locale.to_s+"/layouts/content").to_sym
end





                    # HELPER

helpers do


  # Cambiar idioma

  def change_language
    if request.path_info=="/"
      return "/en"

    elsif I18n.locale == :es
      return request.path_info.sub('es', 'en')

    elsif  I18n.locale == :en
      return request.path_info.sub('en', 'es')

    end
  end


  # Imprimir menu

  def actual_menu num
    if num == @data[:menuNumber]
      @class= "panel-collapse in"

    else
      @class = "panel-collapse collapse"
    end

  end

  # Link a rutas externas

  def ruta_externa
    @base = "http://www.gis3.com"

    if I18n.locale == :es
      return @base + '/espanol'

    elsif I18n.locale == :en
      return @base + '/english'

    end

  end


#   abreviacion del I18n.t

  def t(*args)
    I18n.t(*args)
  end



end
