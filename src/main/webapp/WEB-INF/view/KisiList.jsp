<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<%@taglib uri="http://www.springframework.org/tags/form" prefix="f"%>  
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%> 

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>KisiList</title>
</head>
<body>  
        <center>  
          
            <div style="color: teal;font-size: 30px">Being Java Guys | User Details</div>  
              
            <c:if test="${!empty kisiList}">  
                <table border="1" bgcolor="black" width="600px">  
                    <tr style="background-color: teal;color: white;text-align: center;" height="40px">  
                        <td>Kisi Id</td>  
                        <td>AD</td>  
                        <td>Soyad</td>  
                        <td>Yas</td>  
                        <td>Sehir</td>  
                    </tr>  
                    <c:forEach items="${kisiList}" var="kisiList">  
                        <tr style="background-color:white;color: black;text-align: center;" height="30px" >  
                            <td><c:out value="${kisiList.ID}"/></td>  
                            <td><c:out value="${kisiList.ad}"/></td>  
                            <td><c:out value="${kisiList.soyad}"/></td>  
                            <td><c:out value="${kisiList.yas}"/></td>  
                            <td><c:out value="${kisiList.sehir}"/></td>  
                        </tr>  
                    </c:forEach>  
                </table>  
            </c:if>  
              
              
            <a href="kisiEkle.html" >Click Here to add new User</a>  
        </center>  
    </body>  
</html>