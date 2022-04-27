<?php
/**
 * WordPress için başlangıç ayar dosyası.
 *
 * Bu dosya kurulum sırasında wp-config.php dosyasının oluşturulabilmesi için
 * kullanılır. İsterseniz bu dosyayı kopyalayıp, ismini "wp-config.php" olarak değiştirip,
 * değerleri girerek de kullanabilirsiniz.
 *
 * Bu dosya şu ayarları içerir:
 * 
 * * MySQL ayarları
 * * Gizli anahtarlar
 * * Veritabanı tablo ön eki
 * * ABSPATH
 * 
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL ayarları - Bu bilgileri servis sağlayıcınızdan alabilirsiniz ** //
/** WordPress için kullanılacak veritabanının adı */
define( 'DB_NAME', 'u773239193_cukurova' );

/** MySQL veritabanı kullanıcısı */
define( 'DB_USER', 'u773239193_root' );

/** MySQL veritabanı parolası */
define( 'DB_PASSWORD', 'b&o*?WlVY0' );

/** MySQL sunucusu */
define( 'DB_HOST', 'localhost' );

/** Yaratılacak tablolar için veritabanı karakter seti. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Veritabanı karşılaştırma tipi. Herhangi bir şüpheniz varsa bu değeri değiştirmeyin. */
define( 'DB_COLLATE', '' );

/**#@+
 * Eşsiz doğrulama anahtarları ve tuzlar.
 *
 * Her anahtar farklı bir karakter kümesi olmalı!
 * {@link http://api.wordpress.org/secret-key/1.1/salt WordPress.org secret-key service} servisini kullanarak yaratabilirsiniz.
 * Çerezleri geçersiz kılmak için istediğiniz zaman bu değerleri değiştirebilirsiniz. Bu tüm kullanıcıların tekrar giriş yapmasını gerektirecektir.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'KK25M3Fy$!dL Ni#cu&/`2IBZTL7t?Wz`]A}+ckjIA_=v8,bcm_EMUp!a+E~( G5' );
define( 'SECURE_AUTH_KEY',  '|<(K]=[efB?!o4hOFStjWWRY)kSC+iZ2Jj2ViVGIsrk&! 51cs$(OxJV9cz>lL)S' );
define( 'LOGGED_IN_KEY',    'dP>3xyM, gJXg|po^<zpp@eHXe*>$OIw,5C^rk~*7KRSi_<ZHEh!FdtB-LzLo0M[' );
define( 'NONCE_KEY',        'Kte5`-ACSbkj0U>05!HQ]%e4Zdsx>v[#[:8BUQ%9NQcXXr)Q3%lJ}E[bt=UZzi40' );
define( 'AUTH_SALT',        'z(5bx{(;:xD9#m 4o9SV2H7H_ixo0qiFB6jj.1{ub2%krBY0jwsHrbz3_jE32g[i' );
define( 'SECURE_AUTH_SALT', '$d%1q*VpKSR)v?+?G!W9}EXcQc%cX_CirY[a&JYkh$L@n#*Z@l~|)Th91D2Ey?w[' );
define( 'LOGGED_IN_SALT',   '5]y.<?GuxVr~K[qJJ0pKclRoVQ}PD Jt4Jbh~qbL]g0u% $U?2w8]Q6q%&?@QZ./' );
define( 'NONCE_SALT',       'e=C<aM@]|+sA[o[yxZ_?i`=OdV+;UOfzEiPSdX]cNX1NIJc#aI0S>T)Of;R;fG.]' );

/**#@-*/

/**
 * WordPress veritabanı tablo ön eki.
 *
 * Tüm kurulumlara ayrı bir önek vererek bir veritabanına birden fazla kurulum yapabilirsiniz.
 * Sadece rakamlar, harfler ve alt çizgi lütfen.
 */
$table_prefix = 'wp_';

/**
 * Geliştiriciler için: WordPress hata ayıklama modu.
 *
 * Bu değeri "true" yaparak geliştirme sırasında hataların ekrana basılmasını sağlayabilirsiniz.
 * Tema ve eklenti geliştiricilerinin geliştirme aşamasında WP_DEBUG
 * kullanmalarını önemle tavsiye ederiz.
 * 
 * Hata ayıklama için kullanabilecek diğer sabitler ile ilgili daha fazla bilgiyi
 * belgelerden edinebilirsiniz.
 * 
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Hepsi bu kadar. Mutlu bloglamalar! */

/** WordPress dizini için mutlak yol. */
if ( ! defined( 'ABSPATH' ) ) {
    define( 'ABSPATH', __DIR__ . '/' );
}

/** WordPress değişkenlerini ve yollarını kurar. */
require_once ABSPATH . 'wp-settings.php';