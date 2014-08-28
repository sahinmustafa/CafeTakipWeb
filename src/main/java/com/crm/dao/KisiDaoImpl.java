package com.crm.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.crm.model.Kisi;

@Repository("kisiDao")
public class KisiDaoImpl implements KisiDao{

    @Autowired
    protected SessionFactory sessionFactory;

    @SuppressWarnings("unchecked")
    @Transactional
    public List<Kisi> allKisiList(){
            Session ses = sessionFactory.openSession();
            ses.beginTransaction();
            List<Kisi> list = ses.createQuery("FROM Kisi").list();
            ses.getTransaction().commit();

            return list;
    }

    @Transactional
    public void addKisi(Kisi k){
            Session ses = sessionFactory.openSession();
            ses.beginTransaction();
            ses.saveOrUpdate(k);
            ses.getTransaction().commit();
    }

    public boolean kisiSil(int id) {
            Session ses = sessionFactory.openSession();
            ses.beginTransaction();
            Object object = ses.get(Kisi.class, id);

            if(object == null)
                    return false;

            ses.delete(object);
            ses.getTransaction().commit();
            return true;
    }

    public boolean kisiGuncelle(Kisi k) {
            Session ses = sessionFactory.openSession();
            ses.beginTransaction();
            ses.update(k);
            ses.getTransaction().commit();
            return true;
    }

    public Kisi getKisi(int id) {
            Session ses = sessionFactory.openSession();
            ses.beginTransaction();
            Kisi kisi = (Kisi) ses.get(Kisi.class, id);
            ses.getTransaction().commit();
            return kisi;
    }

    public List<Kisi> kisiList(String hql) {
        Session ses = sessionFactory.openSession();
        ses.beginTransaction();
        List<Kisi> list = ses.createQuery(hql).list();
        ses.getTransaction().commit();
        return list;
    }
}
