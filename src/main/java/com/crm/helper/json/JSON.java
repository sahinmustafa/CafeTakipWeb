/* ÖRNEKTÝR !! :) */
package com.crm.helper.json;

import java.util.List;

import com.crm.model.Kisi;
import java.io.IOException;
import org.codehaus.jackson.map.ObjectMapper;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class JSON {
    
    

    public static String[] getValuesFromJSONString(String jsonArray, String key){
        try {
            JSONArray array = new JSONArray(jsonArray);
            int size = array.length();
            String[] strngs = new String[size];

            for(int i = 0 ; i < size; i ++){
                    JSONObject json = new JSONObject(array.getJSONObject(i).toString());
                    System.out.println(json.toString());
                    strngs[i] = json.getString(key);
            }
            return strngs;

        } catch (JSONException e) {
                return null;
        }
    }

    public static String jsonKisiList(List<Kisi> list){
        try{
            JSONArray array = new JSONArray();

            for(Kisi k : list){
                    JSONObject json = getJSONKisi(k);
                    array.put(json);
            }
            JSONObject result = new JSONObject();
            result.put("data", array);
            result.put("totalCount", list.size());
            result.put("status", new Integer(1).toString());

            return result.toString();
        }catch(JSONException ex){
            return "{\"success\" : false, \"message\" : \""+ ex.getMessage() + "\"}";
        }
    }

    public static JSONObject getJSONKisi(Kisi k) throws JSONException{
        try{
            JSONObject json = new JSONObject();

            json.put("id".toString(), k.getCOid());
            json.put("ad", k.getAd().toString());
            json.put("soyad", k.getSoyad().toString());

            return json;
        }catch(JSONException ex){
            throw ex;
        }
    }
    
    public static String getKisi(Kisi k){
        try {
            JSONObject json = new JSONObject();
            json.put("data", JSON.getJSONKisi(k));
            json.put("success", true);

            return json.toString();
        } catch (JSONException ex) {
            return "{\"success\" : false, \"message\" : \""+ ex.getMessage() + "\"}";
        }
    }
    
    public static String jsonBilgisayarList(){
        try {
            JSONArray array = new JSONArray();
            
            for (int i = 0; i < 25; i++) {
                JSONObject json = new JSONObject();
                json.put("name", "PC " + i);
                json.put("baseUrl", "images/kapali.png");
                json.put("status", "kapali");
                
                array.put(json);
            }
            JSONObject json = new JSONObject();
            json.put("data", array);
            json.put("success", true);
            
            return json.toString();
        } catch (JSONException ex) {
            return "{\"success\" : false, \"message\" : \""+ ex.getMessage() + "\"}";
        }
    }
	
}
