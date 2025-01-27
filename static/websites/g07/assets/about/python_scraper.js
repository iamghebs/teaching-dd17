document.write( '<div class=\"highlight\" style=\"background: #f8f8f8\"><pre style=\"line-height: 125%;\"><span></span><span style=\"color: #3D7B7B; font-style: italic\"># imported packages</span>\n' );
document.write( '<span style=\"color: #008000; font-weight: bold\">import</span> <span style=\"color: #0000FF; font-weight: bold\">requests</span> <span style=\"color: #3D7B7B; font-style: italic\"># to load the html page</span>\n' );
document.write( '<span style=\"color: #008000; font-weight: bold\">from</span> <span style=\"color: #0000FF; font-weight: bold\">bs4</span> <span style=\"color: #008000; font-weight: bold\">import</span> BeautifulSoup <span style=\"color: #3D7B7B; font-style: italic\"># to parse the html</span>\n' );
document.write( '<span style=\"color: #008000; font-weight: bold\">import</span> <span style=\"color: #0000FF; font-weight: bold\">csv</span> <span style=\"color: #3D7B7B; font-style: italic\"># to work with csv</span>\n' );
document.write( '<span style=\"color: #008000; font-weight: bold\">from</span> <span style=\"color: #0000FF; font-weight: bold\">numpy</span> <span style=\"color: #008000; font-weight: bold\">import</span> random <span style=\"color: #3D7B7B; font-style: italic\"># to create random numbers</span>\n' );
document.write( '<span style=\"color: #008000; font-weight: bold\">from</span> <span style=\"color: #0000FF; font-weight: bold\">time</span> <span style=\"color: #008000; font-weight: bold\">import</span> sleep <span style=\"color: #3D7B7B; font-style: italic\"># to wait during script execution</span>\n' );
document.write( '\n' );
document.write( '<span style=\"color: #3D7B7B; font-style: italic\"># -------------------------------- MODIFY THIS -------------------------------------------</span>\n' );
document.write( '\n' );
document.write( 'target_csv <span style=\"color: #666666\">=</span> <span style=\"color: #BA2121\">\'covid_objects.csv\'</span>\n' );
document.write( 'url <span style=\"color: #666666\">=</span> <span style=\"color: #BA2121\">\'http://amazon.it/\'</span>\n' );
document.write( 'country <span style=\"color: #666666\">=</span> <span style=\"color: #BA2121\">\'.it\'</span>\n' );
document.write( 'queries <span style=\"color: #666666\">=</span> [<span style=\"color: #BA2121\">\'covid-19\'</span>, <span style=\"color: #BA2121\">\'coronavirus\'</span>]\n' );
document.write( '\n' );
document.write( '<span style=\"color: #3D7B7B; font-style: italic\"># -------------------------------- MODIFY THIS -------------------------------------------</span>\n' );
document.write( '\n' );
document.write( '\n' );
document.write( '<span style=\"color: #3D7B7B; font-style: italic\"># search for a word in array</span>\n' );
document.write( '<span style=\"color: #3D7B7B; font-style: italic\"># used to check amazon\'s category</span>\n' );
document.write( '<span style=\"color: #008000; font-weight: bold\">def</span> <span style=\"color: #0000FF\">word_presence</span>(array, html):\n' );
document.write( '    <span style=\"color: #008000; font-weight: bold\">for</span> word <span style=\"color: #AA22FF; font-weight: bold\">in</span> array:\n' );
document.write( '        <span style=\"color: #008000; font-weight: bold\">if</span> word <span style=\"color: #AA22FF; font-weight: bold\">in</span> html<span style=\"color: #666666\">.</span>text:\n' );
document.write( '            <span style=\"color: #008000; font-weight: bold\">return</span> <span style=\"color: #008000; font-weight: bold\">True</span>\n' );
document.write( '\n' );
document.write( '\n' );
document.write( '<span style=\"color: #3D7B7B; font-style: italic\"># class structure for covid products</span>\n' );
document.write( '<span style=\"color: #008000; font-weight: bold\">class</span> <span style=\"color: #0000FF; font-weight: bold\">CovidObject</span>:\n' );
document.write( '\n' );
document.write( '    <span style=\"color: #008000; font-weight: bold\">def</span> <span style=\"color: #0000FF\">__init__</span>(<span style=\"color: #008000\">self</span>, name, link, category, country, query, rating, n_reviews, img_url):\n' );
document.write( '        <span style=\"color: #008000\">self</span><span style=\"color: #666666\">.</span>name <span style=\"color: #666666\">=</span> name\n' );
document.write( '        <span style=\"color: #008000\">self</span><span style=\"color: #666666\">.</span>link <span style=\"color: #666666\">=</span> link\n' );
document.write( '        <span style=\"color: #008000\">self</span><span style=\"color: #666666\">.</span>category <span style=\"color: #666666\">=</span> category\n' );
document.write( '        <span style=\"color: #008000\">self</span><span style=\"color: #666666\">.</span>country <span style=\"color: #666666\">=</span> country\n' );
document.write( '        <span style=\"color: #008000\">self</span><span style=\"color: #666666\">.</span>query <span style=\"color: #666666\">=</span> query\n' );
document.write( '        <span style=\"color: #008000\">self</span><span style=\"color: #666666\">.</span>rating <span style=\"color: #666666\">=</span> rating\n' );
document.write( '        <span style=\"color: #008000\">self</span><span style=\"color: #666666\">.</span>n_reviews <span style=\"color: #666666\">=</span> n_reviews\n' );
document.write( '        <span style=\"color: #008000\">self</span><span style=\"color: #666666\">.</span>img_url <span style=\"color: #666666\">=</span> img_url\n' );
document.write( '\n' );
document.write( '    <span style=\"color: #008000; font-weight: bold\">def</span> <span style=\"color: #0000FF\">print_object</span>(<span style=\"color: #008000\">self</span>):\n' );
document.write( '        <span style=\"color: #008000\">print</span>(<span style=\"color: #BA2121\">\'NAME: \'</span>, <span style=\"color: #008000\">self</span><span style=\"color: #666666\">.</span>name)\n' );
document.write( '        <span style=\"color: #008000\">print</span>(<span style=\"color: #BA2121\">\'LINK: \'</span>, <span style=\"color: #008000\">self</span><span style=\"color: #666666\">.</span>link)\n' );
document.write( '        <span style=\"color: #008000\">print</span>(<span style=\"color: #BA2121\">\'CATEGORY: \'</span>, <span style=\"color: #008000\">self</span><span style=\"color: #666666\">.</span>category)\n' );
document.write( '        <span style=\"color: #008000\">print</span>(<span style=\"color: #BA2121\">\'COUNTRY: \'</span>, <span style=\"color: #008000\">self</span><span style=\"color: #666666\">.</span>country)\n' );
document.write( '        <span style=\"color: #008000\">print</span>(<span style=\"color: #BA2121\">\'QUERY: \'</span>, <span style=\"color: #008000\">self</span><span style=\"color: #666666\">.</span>query)\n' );
document.write( '        <span style=\"color: #008000\">print</span>(<span style=\"color: #BA2121\">\'RATING: \'</span>, <span style=\"color: #008000\">self</span><span style=\"color: #666666\">.</span>rating)\n' );
document.write( '        <span style=\"color: #008000\">print</span>(<span style=\"color: #BA2121\">\'N_REVIEWS: \'</span>, <span style=\"color: #008000\">self</span><span style=\"color: #666666\">.</span>n_reviews)\n' );
document.write( '        <span style=\"color: #008000\">print</span>(<span style=\"color: #BA2121\">\'IMG_URL: \'</span>, <span style=\"color: #008000\">self</span><span style=\"color: #666666\">.</span>img_url)\n' );
document.write( '\n' );
document.write( '\n' );
document.write( '<span style=\"color: #3D7B7B; font-style: italic\"># categories keywords for Amazon\'s tags</span>\n' );
document.write( 'prime_video <span style=\"color: #666666\">=</span> [<span style=\"color: #BA2121\">\'Prime Video\'</span>, <span style=\"color: #BA2121\">\'برايم فيديو\'</span>]\n' );
document.write( 'book <span style=\"color: #666666\">=</span> [<span style=\"color: #BA2121\">\'Hardcover\'</span>, <span style=\"color: #BA2121\">\'Paperback\'</span>, <span style=\"color: #BA2121\">\'Paperback (Perfect)\'</span>, <span style=\"color: #BA2121\">\'Print on Demand (Paperback)\'</span>, <span style=\"color: #BA2121\">\'Loose Leaf\'</span>, <span style=\"color: #BA2121\">\'Taschenbuch\'</span>, <span style=\"color: #BA2121\">\'Gebundenes Buch\'</span>, <span style=\"color: #BA2121\">\'Broschiert\'</span>, <span style=\"color: #BA2121\">\'Mass Market Paperback\'</span>, <span style=\"color: #BA2121\">\'Broché\'</span>, <span style=\"color: #BA2121\">\'Relié\'</span>, <span style=\"color: #BA2121\">\'Poche\'</span>, <span style=\"color: #BA2121\">\'Copertina flessibile\'</span>, <span style=\"color: #BA2121\">\'Copertina rigida\'</span>, <span style=\"color: #BA2121\">\'Tapa blanda\'</span>, <span style=\"color: #BA2121\">\'Tapa dura\'</span>, <span style=\"color: #BA2121\">\'Libro\'</span>, <span style=\"color: #BA2121\">\'Tabla blanda con encolado\'</span>, <span style=\"color: #BA2121\">\'Oprawa twarda\'</span>, <span style=\"color: #BA2121\">\'Oprawa miękka\'</span>, <span style=\"color: #BA2121\">\'Oprawa biblioteczna\'</span>, <span style=\"color: #BA2121\">\'Miękka oprawa\'</span>, <span style=\"color: #BA2121\">\'Pocketbok\'</span>, <span style=\"color: #BA2121\">\'Inbunden\'</span>, <span style=\"color: #BA2121\">\'Biblioteksbindning\'</span>, <span style=\"color: #BA2121\">\'単行本\'</span>, <span style=\"color: #BA2121\">\'雑誌\'</span>, <span style=\"color: #BA2121\">\'ムック\'</span>, <span style=\"color: #BA2121\">\'新書\'</span>,<span style=\"color: #BA2121\">\' ペーパーバック\'</span>, <span style=\"color: #BA2121\">\'Kağıt Kapak\'</span>, <span style=\"color: #BA2121\">\'Ciltsiz\'</span>, <span style=\"color: #BA2121\">\'Ciltli Kapak\'</span>, <span style=\"color: #BA2121\">\'Küçük Boy Ciltsiz\'</span>, <span style=\"color: #BA2121\">\'Pasta blanda\'</span>, <span style=\"color: #BA2121\">\'Pasta dura\'</span>, <span style=\"color: #BA2121\">\'Capa Comum\'</span>, <span style=\"color: #BA2121\">\'Capa Dura\'</span>, <span style=\"color: #BA2121\">\'Capa flexível\'</span>, <span style=\"color: #BA2121\">\'غلاف ورقي\'</span>, <span style=\"color: #BA2121\">\'غلاف صلب\'</span>]\n' );
document.write( 'kindle <span style=\"color: #666666\">=</span> [<span style=\"color: #BA2121\">\'Kindle\'</span>, <span style=\"color: #BA2121\">\'Kindle Ausgabe\'</span>, <span style=\"color: #BA2121\">\'Kindle Edition\'</span>, <span style=\"color: #BA2121\">\'Format Kindle\'</span>, <span style=\"color: #BA2121\">\'Formato Kindle\'</span>, <span style=\"color: #BA2121\">\'Versión Kindle\'</span>, <span style=\"color: #BA2121\">\'Kindle-editie\'</span>, <span style=\"color: #BA2121\">\'Kindle版\'</span>, <span style=\"color: #BA2121\">\'Edición Kindle\'</span>, <span style=\"color: #BA2121\">\'eBook Kindle\'</span>, <span style=\"color: #BA2121\">\'Kindle电子书\'</span>]\n' );
document.write( 'video_disk <span style=\"color: #666666\">=</span> [<span style=\"color: #BA2121\">\'Blu-ray\'</span>, <span style=\"color: #BA2121\">\'DVD\'</span>, <span style=\"color: #BA2121\">\'Dvd\'</span>, <span style=\"color: #BA2121\">\'DVD-ROM\'</span>]\n' );
document.write( 'music_disk <span style=\"color: #666666\">=</span> [<span style=\"color: #BA2121\">\'Audio CD\'</span>, <span style=\"color: #BA2121\">\'Vinyl\'</span>, <span style=\"color: #BA2121\">\'CD de audio\'</span>, <span style=\"color: #BA2121\">\'Disco de Vinil\'</span>, <span style=\"color: #BA2121\">\'Ljud-CD\'</span>]\n' );
document.write( 'audiobook <span style=\"color: #666666\">=</span> [<span style=\"color: #BA2121\">\'Audible Audiobooks\'</span>]\n' );
document.write( 'mp3 <span style=\"color: #666666\">=</span> [<span style=\"color: #BA2121\">\'MP3\'</span>]\n' );
document.write( 'app <span style=\"color: #666666\">=</span> [<span style=\"color: #BA2121\">\'App\'</span>, <span style=\"color: #BA2121\">\'Aplicativo\'</span>]\n' );
document.write( '\n' );
document.write( '<span style=\"color: #3D7B7B; font-style: italic\"># array to store all the products</span>\n' );
document.write( 'covid_objects_list <span style=\"color: #666666\">=</span> []\n' );
document.write( '\n' );
document.write( '<span style=\"color: #3D7B7B; font-style: italic\"># headers passed to the server to fake a real browser</span>\n' );
document.write( 'headers <span style=\"color: #666666\">=</span> {<span style=\"color: #BA2121\">\"User-Agent\"</span>: <span style=\"color: #BA2121\">\"Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0\"</span>}\n' );
document.write( '\n' );
document.write( '<span style=\"color: #3D7B7B; font-style: italic\"># ACTUAL SCRAPING</span>\n' );
document.write( '<span style=\"color: #008000; font-weight: bold\">for</span> query <span style=\"color: #AA22FF; font-weight: bold\">in</span> queries:\n' );
document.write( '\n' );
document.write( '    <span style=\"color: #3D7B7B; font-style: italic\"># the scraper can be blocked by the server</span>\n' );
document.write( '    <span style=\"color: #3D7B7B; font-style: italic\"># the script retry after every blocked request for 50 times</span>\n' );
document.write( '    retry <span style=\"color: #666666\">=</span> <span style=\"color: #BA2121\">\'y\'</span>\n' );
document.write( '    tries <span style=\"color: #666666\">=</span> <span style=\"color: #666666\">0</span>\n' );
document.write( '    <span style=\"color: #008000; font-weight: bold\">while</span> retry <span style=\"color: #666666\">==</span> <span style=\"color: #BA2121\">\'y\'</span>:\n' );
document.write( '\n' );
document.write( '        <span style=\"color: #3D7B7B; font-style: italic\"># create link with the query</span>\n' );
document.write( '        url_query <span style=\"color: #666666\">=</span> url <span style=\"color: #666666\">+</span> <span style=\"color: #BA2121\">\"s?k=\"</span> <span style=\"color: #666666\">+</span> query\n' );
document.write( '\n' );
document.write( '        <span style=\"color: #3D7B7B; font-style: italic\"># request the html page to the server</span>\n' );
document.write( '        results <span style=\"color: #666666\">=</span> requests<span style=\"color: #666666\">.</span>get(url_query, headers<span style=\"color: #666666\">=</span>headers)\n' );
document.write( '\n' );
document.write( '        <span style=\"color: #3D7B7B; font-style: italic\"># parse the html</span>\n' );
document.write( '        soup <span style=\"color: #666666\">=</span> BeautifulSoup(results<span style=\"color: #666666\">.</span>text, <span style=\"color: #BA2121\">\"html.parser\"</span>)\n' );
document.write( '\n' );
document.write( '        <span style=\"color: #3D7B7B; font-style: italic\"># extract the products container form the html</span>\n' );
document.write( '        object_results <span style=\"color: #666666\">=</span> soup<span style=\"color: #666666\">.</span>find_all(<span style=\"color: #BA2121\">\'div\'</span>, {<span style=\"color: #BA2121\">\"data-component-type\"</span>: <span style=\"color: #BA2121\">\"s-search-result\"</span>})\n' );
document.write( '        retry <span style=\"color: #666666\">=</span> <span style=\"color: #BA2121\">\'n\'</span>\n' );
document.write( '\n' );
document.write( '        <span style=\"color: #3D7B7B; font-style: italic\"># if no element in the array -> scraper has been blocked</span>\n' );
document.write( '        <span style=\"color: #008000; font-weight: bold\">if</span> <span style=\"color: #008000\">len</span>(object_results) <span style=\"color: #666666\">==</span> <span style=\"color: #666666\">0</span>:\n' );
document.write( '\n' );
document.write( '            <span style=\"color: #008000\">print</span>(<span style=\"color: #BA2121\">f\'scraper blocked at \"</span><span style=\"color: #A45A77; font-weight: bold\">{</span>query<span style=\"color: #A45A77; font-weight: bold\">}</span><span style=\"color: #BA2121\">\"\'</span>)\n' );
document.write( '            sleepTime <span style=\"color: #666666\">=</span> random<span style=\"color: #666666\">.</span>uniform(<span style=\"color: #666666\">2</span>, <span style=\"color: #666666\">4</span>)\n' );
document.write( '            sleep(sleepTime)\n' );
document.write( '\n' );
document.write( '            tries <span style=\"color: #666666\">=</span> tries <span style=\"color: #666666\">+</span> <span style=\"color: #666666\">1</span>\n' );
document.write( '            <span style=\"color: #008000; font-weight: bold\">if</span> tries <span style=\"color: #666666\">></span> <span style=\"color: #666666\">50</span>:\n' );
document.write( '                retry <span style=\"color: #666666\">=</span> <span style=\"color: #008000\">input</span>(<span style=\"color: #BA2121\">\'------------> type \"y\" to retry: \'</span>)\n' );
document.write( '                <span style=\"color: #008000; font-weight: bold\">if</span> retry <span style=\"color: #666666\">==</span> <span style=\"color: #BA2121\">\'y\'</span>:\n' );
document.write( '                    tries <span style=\"color: #666666\">=</span> <span style=\"color: #666666\">0</span>\n' );
document.write( '            <span style=\"color: #008000; font-weight: bold\">else</span>:\n' );
document.write( '                retry <span style=\"color: #666666\">=</span> <span style=\"color: #BA2121\">\'y\'</span>\n' );
document.write( '        <span style=\"color: #008000; font-weight: bold\">else</span>:\n' );
document.write( '            <span style=\"color: #008000\">print</span>(<span style=\"color: #BA2121\">f\'scraper passed at \"</span><span style=\"color: #A45A77; font-weight: bold\">{</span>query<span style=\"color: #A45A77; font-weight: bold\">}</span><span style=\"color: #BA2121\">\"\'</span>)\n' );
document.write( '\n' );
document.write( '    <span style=\"color: #3D7B7B; font-style: italic\"># extract each product in the products container</span>\n' );
document.write( '    <span style=\"color: #008000; font-weight: bold\">for</span> container <span style=\"color: #AA22FF; font-weight: bold\">in</span> object_results:\n' );
document.write( '\n' );
document.write( '        <span style=\"color: #3D7B7B; font-style: italic\"># check the product category</span>\n' );
document.write( '        <span style=\"color: #008000; font-weight: bold\">if</span> word_presence(prime_video, container):\n' );
document.write( '            category <span style=\"color: #666666\">=</span> <span style=\"color: #BA2121\">\'Prime video\'</span>\n' );
document.write( '        <span style=\"color: #008000; font-weight: bold\">elif</span> word_presence(book, container):\n' );
document.write( '            category <span style=\"color: #666666\">=</span> <span style=\"color: #BA2121\">\'Book\'</span>\n' );
document.write( '        <span style=\"color: #008000; font-weight: bold\">elif</span> word_presence(kindle, container):\n' );
document.write( '            category <span style=\"color: #666666\">=</span> <span style=\"color: #BA2121\">\'Kindle\'</span>\n' );
document.write( '        <span style=\"color: #008000; font-weight: bold\">elif</span> word_presence(video_disk, container):\n' );
document.write( '            category <span style=\"color: #666666\">=</span> <span style=\"color: #BA2121\">\'Video disk\'</span>\n' );
document.write( '        <span style=\"color: #008000; font-weight: bold\">elif</span> word_presence(music_disk, container):\n' );
document.write( '            category <span style=\"color: #666666\">=</span> <span style=\"color: #BA2121\">\'Music disk\'</span>\n' );
document.write( '        <span style=\"color: #008000; font-weight: bold\">elif</span> word_presence(audiobook, container):\n' );
document.write( '            category <span style=\"color: #666666\">=</span> <span style=\"color: #BA2121\">\'Audiobook\'</span>\n' );
document.write( '        <span style=\"color: #008000; font-weight: bold\">elif</span> word_presence(mp3, container):\n' );
document.write( '            category <span style=\"color: #666666\">=</span> <span style=\"color: #BA2121\">\'MP3 file\'</span>\n' );
document.write( '        <span style=\"color: #008000; font-weight: bold\">elif</span> word_presence(app, container):\n' );
document.write( '            category <span style=\"color: #666666\">=</span> <span style=\"color: #BA2121\">\'App\'</span>\n' );
document.write( '        <span style=\"color: #008000; font-weight: bold\">else</span>:\n' );
document.write( '            category <span style=\"color: #666666\">=</span> <span style=\"color: #BA2121\">\"other\"</span>\n' );
document.write( '\n' );
document.write( '        name <span style=\"color: #666666\">=</span> container<span style=\"color: #666666\">.</span>find(<span style=\"color: #BA2121\">\'h2\'</span>)<span style=\"color: #666666\">.</span>a<span style=\"color: #666666\">.</span>span<span style=\"color: #666666\">.</span>text\n' );
document.write( '        link <span style=\"color: #666666\">=</span> url <span style=\"color: #666666\">+</span> container<span style=\"color: #666666\">.</span>find(<span style=\"color: #BA2121\">\'h2\'</span>)<span style=\"color: #666666\">.</span>a[<span style=\"color: #BA2121\">\'href\'</span>]\n' );
document.write( '\n' );
document.write( '        <span style=\"color: #3D7B7B; font-style: italic\"># get image urls with different resolutions</span>\n' );
document.write( '        img_url_temp <span style=\"color: #666666\">=</span> container<span style=\"color: #666666\">.</span>find(<span style=\"color: #BA2121\">\'img\'</span>, {<span style=\"color: #BA2121\">\"data-image-latency\"</span>: <span style=\"color: #BA2121\">\"s-product-image\"</span>})[<span style=\"color: #BA2121\">\'srcset\'</span>]\n' );
document.write( '        <span style=\"color: #3D7B7B; font-style: italic\"># extract the lowest resolution image url</span>\n' );
document.write( '        img_url <span style=\"color: #666666\">=</span> img_url_temp<span style=\"color: #666666\">.</span>split(<span style=\"color: #BA2121\">\", \"</span>)[<span style=\"color: #666666\">0</span>][:<span style=\"color: #666666\">-3</span>]\n' );
document.write( '\n' );
document.write( '        <span style=\"color: #3D7B7B; font-style: italic\"># check if there are reviews</span>\n' );
document.write( '        childTag <span style=\"color: #666666\">=</span> container<span style=\"color: #666666\">.</span>find(<span style=\"color: #BA2121\">\'div\'</span>, class_<span style=\"color: #666666\">=</span><span style=\"color: #BA2121\">\'a-row a-size-small\'</span>)\n' );
document.write( '        <span style=\"color: #008000; font-weight: bold\">if</span> childTag:\n' );
document.write( '            rating_container <span style=\"color: #666666\">=</span> container<span style=\"color: #666666\">.</span>find(<span style=\"color: #BA2121\">\'div\'</span>, class_<span style=\"color: #666666\">=</span><span style=\"color: #BA2121\">\'a-row a-size-small\'</span>)\n' );
document.write( '            rating <span style=\"color: #666666\">=</span> rating_container<span style=\"color: #666666\">.</span>find_all(<span style=\"color: #BA2121\">\'span\'</span>)[<span style=\"color: #666666\">2</span>]<span style=\"color: #666666\">.</span>text[:<span style=\"color: #666666\">3</span>]\n' );
document.write( '            n_reviews <span style=\"color: #666666\">=</span> rating_container<span style=\"color: #666666\">.</span>find_all(<span style=\"color: #BA2121\">\'span\'</span>)[<span style=\"color: #666666\">4</span>]<span style=\"color: #666666\">.</span>text\n' );
document.write( '        <span style=\"color: #008000; font-weight: bold\">else</span>:\n' );
document.write( '            rating <span style=\"color: #666666\">=</span> <span style=\"color: #BA2121\">\'absent\'</span>\n' );
document.write( '            n_reviews <span style=\"color: #666666\">=</span> <span style=\"color: #BA2121\">\'absent\'</span>\n' );
document.write( '\n' );
document.write( '        <span style=\"color: #3D7B7B; font-style: italic\"># store the object in the array</span>\n' );
document.write( '        covid_objects_list<span style=\"color: #666666\">.</span>append(CovidObject(name, link, category, country, query, rating, n_reviews, img_url))\n' );
document.write( '\n' );
document.write( '    <span style=\"color: #3D7B7B; font-style: italic\"># print all the objects and the total number</span>\n' );
document.write( '    <span style=\"color: #008000; font-weight: bold\">for</span> obj <span style=\"color: #AA22FF; font-weight: bold\">in</span> covid_objects_list:\n' );
document.write( '        <span style=\"color: #008000\">print</span>(<span style=\"color: #BA2121\">\'--------------------------------------\'</span>)\n' );
document.write( '        obj<span style=\"color: #666666\">.</span>print_object()\n' );
document.write( '\n' );
document.write( '    <span style=\"color: #008000\">print</span>(<span style=\"color: #BA2121\">\'tot objects: \'</span>, <span style=\"color: #008000\">len</span>(covid_objects_list))\n' );
document.write( '\n' );
document.write( '    <span style=\"color: #3D7B7B; font-style: italic\"># save the data gathered</span>\n' );
document.write( '    save <span style=\"color: #666666\">=</span> <span style=\"color: #008000\">input</span>(<span style=\"color: #BA2121\">f\'-----------> Type \"y\" to store data of query \"</span><span style=\"color: #A45A77; font-weight: bold\">{</span>query<span style=\"color: #A45A77; font-weight: bold\">}</span><span style=\"color: #BA2121\">\": \'</span>)\n' );
document.write( '\n' );
document.write( '    <span style=\"color: #008000; font-weight: bold\">if</span> save <span style=\"color: #666666\">==</span> <span style=\"color: #BA2121\">\'y\'</span>:\n' );
document.write( '\n' );
document.write( '        <span style=\"color: #3D7B7B; font-style: italic\"># open the csv</span>\n' );
document.write( '        f <span style=\"color: #666666\">=</span> <span style=\"color: #008000\">open</span>(target_csv, <span style=\"color: #BA2121\">\'a\'</span>, encoding<span style=\"color: #666666\">=</span><span style=\"color: #BA2121\">\'UTF8\'</span>, newline<span style=\"color: #666666\">=</span><span style=\"color: #BA2121\">\'\'</span>)\n' );
document.write( '        writer <span style=\"color: #666666\">=</span> csv<span style=\"color: #666666\">.</span>writer(f)\n' );
document.write( '\n' );
document.write( '        <span style=\"color: #3D7B7B; font-style: italic\"># save each object in the csv file</span>\n' );
document.write( '        <span style=\"color: #008000; font-weight: bold\">for</span> obj <span style=\"color: #AA22FF; font-weight: bold\">in</span> covid_objects_list:\n' );
document.write( '            writer<span style=\"color: #666666\">.</span>writerow([obj<span style=\"color: #666666\">.</span>name, obj<span style=\"color: #666666\">.</span>link, obj<span style=\"color: #666666\">.</span>category, obj<span style=\"color: #666666\">.</span>country, obj<span style=\"color: #666666\">.</span>query, obj<span style=\"color: #666666\">.</span>rating, obj<span style=\"color: #666666\">.</span>n_reviews, obj<span style=\"color: #666666\">.</span>img_url])\n' );
document.write( '</pre></div>\n' );
