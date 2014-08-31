/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

package com.crm.dao;

import java.util.List;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

/**
 *
 * @author haye
 */
public class DaoH {
    
    private final static org.hibernate.SessionFactory sessionFak;
    
    static {
        sessionFak = new Configuration().configure().buildSessionFactory();
    }
    
    private static org.hibernate.SessionFactory getSessionFactory(){
        return sessionFak;
    }
    
    
     
    public static int ekle(Object o) throws HibernateException{
        
        Session sesion = getSessionFactory().openSession();
        
        Transaction tr = sesion.beginTransaction();        
        try{
            sesion.save(o);
            tr.commit();
            return 1;
        }catch(HibernateException ex){
            tr.rollback();
            throw ex;
        }finally{
            //sesion.close();
        }    
    }
       
    public static boolean tamamenSil(int id, Class clas)throws HibernateException{
        
        Session sesion = getSessionFactory().openSession();
        
        Transaction tr = sesion.beginTransaction();        
        try{
            Object obj = sesion.get(clas, id);
            if(obj != null){
                sesion.delete(obj);
                tr.commit();
                return true;
            }
            return false;
        }catch(HibernateException ex){
            tr.rollback();
            throw ex;
        }finally{
            //sesion.close();
        }
    }
    
    public static List<? extends Object> listele(String hql)throws HibernateException{
        
        Session sesion = getSessionFactory().openSession();
        
        Transaction tr = sesion.beginTransaction();        
        try{
            List list = sesion.createQuery(hql).list();
            tr.commit();
            return list;            
        }catch(HibernateException ex){
            tr.rollback();
            throw ex;
        }finally{
            //sesion.close();
        }        
    }
    
    public static boolean guncelle(Object obj) throws HibernateException{
    
        Session sesion = getSessionFactory().openSession();
        
        Transaction tr = sesion.beginTransaction();        
        try{
            sesion.update(obj);
            tr.commit();
            return true;
        }catch(HibernateException ex){
            tr.rollback();
            throw ex;
        }finally{
            sesion.close();
        }
    }
    
    @SuppressWarnings("rawtypes")
    public static Object bilgiGetir(int id, Class clas){

        Session sesion = getSessionFactory().openSession();

        Transaction tr = sesion.beginTransaction();
        try {            
            Object obj = sesion.get(clas, id);
            tr.commit();
            return obj;
        } catch (HibernateException ex) {
            tr.rollback();
            throw ex;
        }finally{
            //sesion.close();
        }
    }
    
    public static boolean sil(int ID, Class clas){
        String sql = "UPDATE " + clas.getName() + " SET silinmis=1 WHERE ID =" + ID;        
        return sorguCalistir(sql);
    }
    
    public static boolean sorguCalistir(String sql){
        Session sesion = getSessionFactory().openSession();
        
        Transaction tr = sesion.beginTransaction();
        try {           
            int result = sesion.createQuery(sql).executeUpdate();
            tr.commit();
            return result > -1;            
        } catch (HibernateException ex) {
            tr.rollback();
            throw ex;
        }finally{
            sesion.close();
        }
    }
    
    public String[] getColumnName(Class clas){
        return getSessionFactory().getClassMetadata(clas).getPropertyNames();
    }
    
    
}
