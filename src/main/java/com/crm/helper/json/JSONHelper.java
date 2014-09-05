/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.crm.helper.json;

import com.crm.model.*;
import java.io.IOException;
import java.util.List;
import org.codehaus.jackson.map.ObjectMapper;
import org.json.JSONException;
import org.json.JSONObject;

/**
 *
 * @author haye
 * @param <Model>
 */
public class JSONHelper <Model extends Object> {
    
    public static enum objectType {
        Bilgisayar,
        Calisan,
        Kisi,
        Musteri,
        Siparis,
        Sira,
        Urun
    };
    
    
    private objectType pojoTipi;
    private static ObjectMapper mapper = new ObjectMapper();
    
    
    public JSONHelper(objectType o){
        pojoTipi = o;
    }
   
    public String Object2String(List<Model> object) throws IOException {
        
        //gelen diziyi, ilgili siniftaki de�i�ken isimleri key olarak json dizisine �eviriyor
        String data = mapper.writeValueAsString(object);
        
        //Olu�turulan diziye ek bilgiler de eklenerek g?nderiliyor
        try {
            JSONObject q = new JSONObject();

            q.put("data", data);
            q.put("success",true);
            q.put("totalCount",  object.size());
            
            return  q.toString().replace("\\", "");
        }catch (JSONException ex) {
            return "{\"success\" : false, \"message\" : \""+ ex.getMessage() + "\"}";
        }
        
    }
    
    
    public Model [] String2Object(String json) throws JSONException, IOException {
        //Gelen string JSon objesine �evriliyor
        JSONObject q = new JSONObject(json);
        
        //Di�er bilgileri elenip sadece veri kismi aliniyor 
        String x = q.get("data").toString();
        
        
        if(pojoTipi == objectType.Bilgisayar) {
            Bilgisayar m[] = mapper.readValue(x, Bilgisayar[].class);
            return (Model[]) m;
        }else if(pojoTipi == objectType.Calisan) {
            Calisan m[] = mapper.readValue(x, Calisan[].class);
            return (Model[]) m;
        }else if(pojoTipi == objectType.Kisi) {
            Kisi m[] = mapper.readValue(x, Kisi[].class);
            return (Model[]) m;
        }else if(pojoTipi == objectType.Musteri) {
            Musteri m[] = mapper.readValue(x, Musteri[].class);
            return (Model[]) m;
        }else if(pojoTipi == objectType.Siparis) {
            Siparis m[] = mapper.readValue(x, Siparis[].class);
            return (Model[]) m;
        }else if(pojoTipi == objectType.Sira) {
            Sira m[] = mapper.readValue(x, Sira[].class);
            return (Model[]) m;
        }else if(pojoTipi == objectType.Urun) {
            Urun m[] = mapper.readValue(x, Urun[].class);
            return (Model[]) m;
        }
        
        return null;
    }
    
}
