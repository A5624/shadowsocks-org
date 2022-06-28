import{_ as t,c as e,o as r,a as d}from"./app.b1c59064.js";const u=JSON.parse('{"title":"Stream Encryption/Decryption","description":"","frontmatter":{},"headers":[{"level":2,"title":"Stream Encryption/Decryption","slug":"stream-encryption-decryption"},{"level":2,"title":"TCP","slug":"tcp"},{"level":2,"title":"UDP","slug":"udp"},{"level":2,"title":"Historic stream ciphers","slug":"historic-stream-ciphers"}],"relativePath":"guide/stream.md","lastUpdated":1656382405000}'),a={name:"guide/stream.md"},i=d(`<p><em><strong>Stream ciphers are completely broken and will be removed soon. New users must use <a href="/guide/aead.html">AEAD ciphers</a>.</strong></em></p><p>This historic document is for educational purposes only.</p><h2 id="stream-encryption-decryption" tabindex="-1">Stream Encryption/Decryption <a class="header-anchor" href="#stream-encryption-decryption" aria-hidden="true">#</a></h2><p>Stream_encrypt is a function that takes a secret key, an initialization vector, a message, and produces a ciphertext with the same length as the message.</p><pre><code>Stream_encrypt(key, IV, message) =&gt; ciphertext
</code></pre><p>Stream_decrypt is a function that takes a secret key, an initializaiton vector, a ciphertext, and produces the original message.</p><pre><code>Stream_decrypt(key, IV, ciphertext) =&gt; message
</code></pre><p>The key can be input directly from user or generated from a password. The key derivation is following <code>EVP_BytesToKey(3)</code> in OpenSSL. The detailed spec can be found here: <a href="https://wiki.openssl.org/index.php/Manual:EVP_BytesToKey(3)" target="_blank" rel="noopener noreferrer">https://wiki.openssl.org/index.php/Manual:EVP_BytesToKey(3)</a></p><h2 id="tcp" tabindex="-1">TCP <a class="header-anchor" href="#tcp" aria-hidden="true">#</a></h2><p>A stream cipher encrypted TCP stream starts with a randomly generated initializaiton vector, followed by encrypted payload data.</p><pre><code>[IV][encrypted payload]
</code></pre><h2 id="udp" tabindex="-1">UDP <a class="header-anchor" href="#udp" aria-hidden="true">#</a></h2><p>A stream cipher encrypted UDP packet has the following structure</p><pre><code>[IV][encrypted payload]
</code></pre><p>Each UDP packet is encrypted/decrypted independently with a randomly generated initialization vector.</p><h2 id="historic-stream-ciphers" tabindex="-1">Historic stream ciphers <a class="header-anchor" href="#historic-stream-ciphers" aria-hidden="true">#</a></h2><table><tr><th>Name</th><th>Key Size</th><th>IV Length</th></tr><tr><td>aes-128-ctr</td><td>16</td><td>16</td></tr><tr><td>aes-192-ctr</td><td>24</td><td>16</td></tr><tr><td>aes-256-ctr</td><td>32</td><td>16</td></tr><tr><td>aes-128-cfb</td><td>16</td><td>16</td></tr><tr><td>aes-192-cfb</td><td>24</td><td>16</td></tr><tr><td>aes-256-cfb</td><td>32</td><td>16</td></tr><tr><td>camellia-128-cfb</td><td>16</td><td>16</td></tr><tr><td>camellia-192-cfb</td><td>24</td><td>16</td></tr><tr><td>camellia-256-cfb</td><td>32</td><td>16</td></tr><tr><td>chacha20-ietf</td><td>32</td><td>12</td></tr><tr><td>bf-cfb</td><td>16</td><td>8</td></tr><tr><td>chacha20</td><td>32</td><td>8</td></tr><tr><td>salsa20</td><td>32</td><td>8</td></tr><tr><td>rc4-md5</td><td>16</td><td>16</td></tr></table>`,17),c=[i];function s(n,o,p,h,l,m){return r(),e("div",null,c)}var _=t(a,[["render",s]]);export{u as __pageData,_ as default};
