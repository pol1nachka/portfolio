<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wp_lko0h' );

/** Database username */
define( 'DB_USER', 'wp_zgb6o' );

/** Database password */
define( 'DB_PASSWORD', '_oW6%hCSAT9jl2HY' );

/** Database hostname */
define( 'DB_HOST', 'localhost:3306' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '3(03~(8d]|B;558+1&5~txs859D8w1MI6Jy_J)][UmROaZ!8]*qy)5x+ENibL||V');
define('SECURE_AUTH_KEY', '%u_ssoM(1bJ96;885xK6(cp-46_9TtB~k6j3PeR7w45%42[M;3S[Xq24N@y0U3u;');
define('LOGGED_IN_KEY', '53ITklepMRFf-/I6*57X8Z*eZ6t9X+_l5!YEi#kU5B3]|av%Z3e90OVJSv&Q&Tj)');
define('NONCE_KEY', 'pJg5VLp2NT15_0rc~e1Srk3EY8U%uIWP5]NKLC|1DBv+3(498fdJc843rvUSP~lH');
define('AUTH_SALT', '7!(E4sA:721cJ|CDK-fa]&[:6Y;t(XXcrJ&r*JWR/Bv9cV2-HZl7!Z5%D1iZa6*V');
define('SECURE_AUTH_SALT', '8121&y&%)1!tttsl6X(2ts+MefZK+QKU[/(36PfI+rErv03B!3464vL6HB+67[36');
define('LOGGED_IN_SALT', '/XqGL25w~+3l/sCvkX!g&i(j)66AB&;@(7u4@;*1~ky772oa~6E~]k%5LCN9t!::');
define('NONCE_SALT', 'M0WE6)[k]ZaN:5|2aqG5_N5b!J&r-B(#-T1Z2X2_00K[#6bz(3P%/X|lQ(81D2vs');


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'v3t2XTdi_';


/* Add any custom values between this line and the "stop editing" line. */

define('WP_ALLOW_MULTISITE', true);
/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'CONCATENATE_SCRIPTS', false );
define( 'DISALLOW_FILE_EDIT', true );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
