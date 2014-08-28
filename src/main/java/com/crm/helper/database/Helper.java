package com.crm.helper.database;

import java.util.HashMap;

/**
 *
 * @author Mustafa-Bilgisay
 */
public class Helper {
    
    public static boolean isEmpty(String  value){
        if("".equals(value) || value == null)
            return true;
        else
            return false;
    }
    
    public static String addWhereClause(String hql, String name, String value){
        if(hql.contains("WHERE"))
            return " AND " + name + " = '" + value + "'";
        else
            return " WHERE " + name + " = '" + value + "'";
    }
    
    public static String addLikeClause(String hql, String name, String value){
        if(hql.contains("WHERE"))
            return " AND " + name + " LIKE '%" + value + "%'";
        else
            return "WHERE " + name + " LIKE '%" + value + "%'";
    }
    
    public static Object getHasMapValue(HashMap map, String key){
        String[] value = (String[]) map.get(key);
        
        if(value.length == 1 )
            return value[0];
        
        return value;
    }
    
    
}
