<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html>
      <body>
        <h2>Doctors</h2>
        <table border="1">
          <tr bgcolor="#9acd32">
            <th>Name</th>
            <th>Specialty</th>
            <th>Hospital</th>
          </tr>
          <xsl:for-each select="doctors/doctor">
            <tr>
              <td><xsl:value-of select="name"/></td>
              <td><xsl:value-of select="specialty"/></td>
              <td><xsl:value-of select="hospital"/></td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
